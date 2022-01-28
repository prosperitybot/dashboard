import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App)

Sentry.init({
    app,
    dsn: process.env.SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "dash.prosperitybot.net", /^\//],
      }),
    ],
    tracesSampleRate: 1.0,
  });

app.use(router)
app.mount('#app')
