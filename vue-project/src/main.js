import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {Quasar, Dialog} from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


const app = createApp(App)
app.use(Quasar, {
    Plugin: {
        Dialog
    }
})
app.use(router)
app.mount('#app')