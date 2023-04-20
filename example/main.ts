/* main.ts */
import { createApp } from 'vue';
import App from './App.vue';
// import XinButton from "@xinxin-plus/components/button"
import '@xinxin-plus/theme-chalk/src/index.scss';
import XinUI from '@xinxin-plus/components';
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
// app.use(XinButton)
// app.use(Antd);
app.use(XinUI);
app.mount('#app');
