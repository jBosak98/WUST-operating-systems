defmodule ProcessorScheduler.Scheduler do
    # alias ProcessorScheduler.Processor, as: Processor

    defmodule Processor do
        defstruct id: 0, tasks: [], suma: 0
     end


     def generate_processes(tasks, max, min) do
        1..tasks |> Enum.map(fn _ ->
            get_random_integer(max, min)
        end)
      end


    def scheduler do
        tasks = generate_processes(120, 25, 15)


        processors = 0..50 |> Enum.map(fn id -> %Processor{ id: id} end)
        # tasks |> Enum.map(fn t -> t |> List.first end)


        candidate = get_random_integer(tasks |> Kernel.length, 0)
        max = processors |> Kernel.length
        {rand_sum, rand_time, rand_migration } = random_algorithm(tasks, processors, get_random_integer(max), 3, 0, 0)
        {
            [["RANDOM",rand_sum / rand_time], [3,4]], 
            [["RANDOM",rand_migration], [3,4]], 
            [["RANDOM",rand_migration], [3,4]]
        }
    end

    def random_algorithm([head | tail], proc, candidateId, threshold, time, migration) do
        evaluated_proc =  proc |> Enum.map(fn p ->
            p.tasks |> 
                Enum.map(fn t -> t - 1 end) |> 
                Enum.filter(fn t -> t > 0 end)
            %{p | suma: p.tasks |> Kernel.length}
        end)

        candidate = proc |> Enum.at(candidateId) 
        max = Kernel.length(proc) - 1
        if (candidate.tasks |> Kernel.length > threshold) do
            random_algorithm([head | tail], evaluated_proc, max |> get_random_integer, threshold, time + 1, migration + 1)
        else
            evaluated_proc = evaluated_proc |> Enum.map(fn p -> 
                if(p.id == candidateId) do
                   %{p | tasks: [head | p.tasks]}
                else
                    p
                end
            end)
            random_algorithm(tail, evaluated_proc, max |> get_random_integer, threshold, time + 1, migration)
        end 
     
    end

    def random_algorithm([], proc, candidateId, threshold, time, migration) do
 
        evaluated_proc =  proc |> Enum.map(fn p ->
            newTasks = p.tasks |> 
                Enum.map(fn t -> t - 1 end) |> 
                Enum.filter(fn t -> t > 0 end)
            %{p | tasks: newTasks}
            end) |> 
            Enum.map(fn p ->
                s = p.suma + (p.tasks |> Kernel.length)
                %{p | suma: s }
        end)
        sum_of_tasks =  proc |> Enum.map(fn p -> length(p.tasks) end) |> Enum.sum
        if(sum_of_tasks == 0) do
            {proc |> Enum.map(fn p-> p.suma end) |> Enum.sum, time, migration}
        else
            random_algorithm([], evaluated_proc, 0, threshold, time + 1, migration)
        end
    end

    def get_random_integer(max, min) do
        (:rand.uniform() * (max - min) + min) |> Float.round(0) |> Kernel.trunc()
    end
    def get_random_integer(max) do
        :rand.uniform(max) - 1  |> trunc
        
    end
end

