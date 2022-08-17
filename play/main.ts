import { createApp } from 'vue';
import App from './App.vue';
import { CButton } from '@nuna-ui/components';
import '@nuna-ui/theme-chalk/src/index.less';

const app = createApp(App);

app.use(CButton);
app.mount('#play');
