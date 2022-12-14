import { createApp } from 'vue';
import App from './App.vue';
import { NButton } from '@nuna-ui/components';
import '@nuna-ui/theme-chalk/src/index.less';
// import {NButton} from '../dist/button/index.es.js';
// import NunaUi from '../packages/nuna-ui/index';

const app = createApp(App);

app.use(NButton);
app.mount('#play');
