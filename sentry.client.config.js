import * as Sentry from "@sentry/nextjs"

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://29ec979a7494d881148f12e9c6ff8ce4@o4507951617212416.ingest.us.sentry.io/4507951619244032", // Replace with your actual DSN
    tracesSampleRate: 1.0,
  })
}
