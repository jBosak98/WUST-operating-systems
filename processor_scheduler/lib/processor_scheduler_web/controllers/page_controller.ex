defmodule ProcessorSchedulerWeb.PageController do
  use ProcessorSchedulerWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
