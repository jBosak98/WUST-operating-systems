defmodule FrameScheduler.Algorithms do
    alias FrameScheduler.Lru, as: Lru


    def scheduler(processes, physical_memory) do

        equal_distribution = Enum.map(1..length(processes), fn x -> physical_memory/length(processes) end)
        equal_number_of_tasks = Enum.filter(equal_distribution, fn x-> x != 0 end) |> Enum.count

        random_distribution = random_distr(processes, physical_memory)
        random_number_of_tasks = Enum.filter(random_distribution, fn x-> x != 0 end) |> Enum.count
        
        prop_distribution = prop_distr(processes,physical_memory)
        prop_number_of_tasks = Enum.filter(prop_distribution, fn x-> x != 0 end) |> Enum.count

        [
            ["equal (#{equal_number_of_tasks} tasks)", page_faults(processes, equal_distribution, 0)],
            ["random (#{random_number_of_tasks} tasks)", page_faults(processes, random_distribution, 0)],
            ["proportional (#{prop_number_of_tasks} tasks)", page_faults(processes, prop_distribution, 0)]
        ]
    end

    def page_faults([p | processes], [ d | distr], faults) do
        page_faults(processes,distr, faults + Lru.lru(p, [], d, 0))
    end

    def page_faults([], [], faults) do faults end
    
    def prop_distr(processes, physical_mem) do
        a = Enum.map(processes, fn x -> x |> MapSet.new |> MapSet.size end)
        sum = a  |> Enum.sum
        frame_per_page = physical_mem / sum 
        distr = Enum.map(a, fn x -> frame_per_page * x |> Float.round end)
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

 end