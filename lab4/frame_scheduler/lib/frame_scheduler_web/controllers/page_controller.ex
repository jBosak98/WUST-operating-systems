defmodule FrameSchedulerWeb.PageController do
  use FrameSchedulerWeb, :controller


  def index(conn, _params) do
    a = generate_processes(20,30,0,5)
    # IO.inspect(a)
    pageFaults = FrameScheduler.Algorithms.scheduler(a, 53) |> Poison.encode!
    render conn, "index.html", simple_data: pageFaults
  end

  def generate_processes(tasks, pages, max, min) do
    1..tasks |> Enum.map(fn _ ->
      1..pages |> Enum.map(fn _ ->
        (:rand.uniform() * (max - min) + min) |> Float.round(0) |> trunc()
      end)
    end)
  end

end
