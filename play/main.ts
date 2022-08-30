import { createApp } from 'vue';
import App from './App.vue';
// import { NSpin, NButton } from '@nuna-ui/components';
import '@nuna-ui/theme-chalk/src/index.less';
import NunaUI from '../packages/nuna-ui/index.ts';

const app = createApp(App);

app.use(NunaUI);
app.mount('#play');
