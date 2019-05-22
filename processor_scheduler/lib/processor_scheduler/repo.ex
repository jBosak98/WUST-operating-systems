defmodule ProcessorScheduler.Repo do
  use Ecto.Repo,
    otp_app: :processor_scheduler,
    adapter: Ecto.Adapters.Postgres
end
