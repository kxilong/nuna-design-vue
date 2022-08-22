import { createApp } from 'vue';
import App from './App.vue';
import { NSpin } from '@nuna-ui/components';
import '@nuna-ui/theme-chalk/src/index.less';

const app = createApp(App);

app.use(NSpin);
app.mount('#play');
