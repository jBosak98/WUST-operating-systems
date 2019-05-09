defmodule FrameScheduler.Algorithms do
    
    def scheduler(processes) do
        amount_of_processes = 10
        physical_memory = 5
        frames = div(amount_of_processes, physical_memory)
        reminder = rem(amount_of_processes, physical_memory)
        equal_distribution = frame_per_process(processes,:equal, physical_memory)
        random_distribution = frame_per_process(processes,:random, physical_memory)
        prop_distribution = frame_per_process(processes,:proportional, physical_memory)
        
        [
            ["equal (#{Enum.filter(equal_distribution, fn x-> x != 0 end) |> Enum.count} tasks)", page_faults(processes, equal_distribution, 0)],
            ["random (#{Enum.filter(random_distribution, fn x-> x != 0 end) |> Enum.count} tasks)", page_faults(processes, random_distribution, 0)],
            ["proportional (#{Enum.filter(prop_distribution, fn x-> x != 0 end) |> Enum.count} tasks)", page_faults(processes, prop_distribution, 0)]
        ]
    end

    def page_faults([p | processes], [ d | distr], faults) do
        page_faults(processes,distr, faults + lru(p, [], d, 0))
    end

    def page_faults([], [], faults) do faults end
    
    def prop_distr(processes, physical_mem) do
        a = Enum.map(processes, fn x -> x |> MapSet.new |> MapSet.size end)
        sum = a  |> Enum.sum
        frame_per_page = physical_mem / sum 
        distr = Enum.map(a, fn x -> frame_per_page * x |> Float.round end)
    end


    def frame_per_process(processes, method, physical_mem) do
        case method do
            :equal -> Enum.map(1..length(processes), fn x -> physical_mem/length(processes) end)
            :random -> random_distr(processes, physical_mem)
            :proportional -> prop_distr(processes,physical_mem)
        end
    end 
    def random_distr(processes, physical_mem) do
        dist = get_random_numbers(MapSet.new(), physical_mem, length(processes)) 
        get_interval(0,dist,[])
    end

    def get_random_numbers(numbers, size, no_processes) do
        if Set.size(numbers) == no_processes do
            Set.to_list(numbers) |> Enum.sort
        else
            get_random_numbers(MapSet.put(numbers, Enum.random(1..size)), size, no_processes) 
        end
    end

    def get_interval(prev, [head | list], new_list) do
        get_interval(head + 1, list,[head - prev + 1| new_list])    
    end

    def get_interval(prev, [], new_list) do
        new_list |> Enum.sort
    end

    def lru([page | pages], memory, memory_size, fault_couter) when is_list memory do
        if Enum.empty?(memory) do
           lru(pages, [page | memory], memory_size, fault_couter + 1)
        else 
            if Enum.member?(memory, page) do
                lru(pages, [page | memory], memory_size, fault_couter)
            else
                if length(memory) < memory_size do
                    lru(pages, [page | memory], memory_size, fault_couter + 1)
                else
                    farthest = farthest_page(memory, pages, 0)
                    lru(pages, [page | List.delete_at(memory,farthest)], memory_size, fault_couter + 1)
                end
            end
        end
    end

    def lru([], memory, memory_size, fault_couter) do fault_couter end

 
    def farthest_page([mem_element | memory], pages, page) do
            farthest = Enum.find_index(pages, fn p -> p == mem_element end)
            cond do
                page > farthest ->  farthest_page(memory, pages, farthest) 
                page <= farthest ->  farthest_page(memory, pages, page)
            end
    end

    def farthest_page([], pages, page) do page end
    

 end