defmodule ProcessorSchedulerWeb.PageController do
  use ProcessorSchedulerWeb, :controller

  def index(conn, _params) do
    # data = [[1,2], [3,4]] |> Poison.encode!

    {cpu_load, requests, migration}= ProcessorScheduler.Scheduler.scheduler 
    render(
      conn, 
      "index.html", 
      cpu_load: cpu_load |> Poison.encode!, 
      number_of_requests: requests |> Poison.encode!, 
      number_of_migration: migration |> Poison.encode!
    )
  end
end
