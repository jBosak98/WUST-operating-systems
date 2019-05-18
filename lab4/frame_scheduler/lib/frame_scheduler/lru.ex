defmodule FrameScheduler.Lru do
    
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