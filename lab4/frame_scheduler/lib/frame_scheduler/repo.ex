defmodule FrameScheduler.Repo do
  use Ecto.Repo,
    otp_app: :frame_scheduler,
    adapter: Ecto.Adapters.Postgres
end
