defmodule FrameSchedulerWeb.PageController do
  use FrameSchedulerWeb, :controller


  def index(conn, _params) do
    a = [[1,2,3,4,5,6,1,2,3], [1,2,3,4], [1,1,1,1,1]]
    pageFaults = a |> FrameScheduler.Algorithms.scheduler |> Poison.encode!
    render conn, "index.html", simple_data: pageFaults
  end

end
