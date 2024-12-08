// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"
if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://29ec979a7494d881148f12e9c6ff8ce4@o4507951617212416.ingest.us.sentry.io/4507951619244032",

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  })
}
