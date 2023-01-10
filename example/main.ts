/* main.ts */
import { createApp } from 'vue'
import App from './App.vue'
import XinButton from "@xinxin-plus/components/button"

const app = createApp(App)
app.use(XinButton)
app.mount('#app')