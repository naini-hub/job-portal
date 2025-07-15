// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://929b575ce1b965bca7cca1b82faf8070@o4509668849025024.ingest.us.sentry.io/4509668857151488",
  integrations:[
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ]
//   tracesSampleRate: 1.0,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
//   sendDefaultPii: true,
});

Sentry.profiler.startProfiler();