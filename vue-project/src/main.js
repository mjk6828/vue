import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {Quasar, Dialog} from 'quasar'

const app = createApp(App)
app.use(Quasar, {
    Plugin: {
        Dialog
    }
})
app.use(router)
app.mount('#app')