use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :processor_scheduler, ProcessorSchedulerWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :processor_scheduler, ProcessorScheduler.Repo,
  username: "postgres",
  password: "postgres",
  database: "processor_scheduler_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
