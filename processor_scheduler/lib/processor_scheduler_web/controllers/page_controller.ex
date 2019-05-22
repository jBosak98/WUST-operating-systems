defmodule ProcessorSchedulerWeb.PageController do
  use ProcessorSchedulerWeb, :controller

  def index(conn, _params) do
    data = [[1,2], [3,4]] |> Poison.encode!

    render(conn, "index.html", simple_data: data)
  end
end
