import { createAuth0 } from "@auth0/auth0-vue"
import { createApp } from "vue"

import App from "./App.vue"
import "./assets/styles.css"
import { i18n } from "./localization/i18n"


const app = createApp(App)

app.use(
  createAuth0({
    domain: "dev-a6hf7fdd6eu8g3aa.us.auth0.com",
    clientId: "6SJuvgDct06ZaKGJzarYjSHbn77TFPJQ",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  }),
)

app.use(i18n)
app.mount("#app")
