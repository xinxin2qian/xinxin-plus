/* main.ts */
import { createApp } from 'vue';
import App from './App.vue';
// import XinButton from "@xinxin-plus/components/button"
import '@xinxin-plus/theme-chalk/src/index.scss';
import XinUI from '@xinxin-plus/components';

const app = createApp(App);
// app.use(XinButton)
app.use(XinUI);
app.mount('#app');
