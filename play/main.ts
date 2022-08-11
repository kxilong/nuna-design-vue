import { createApp } from 'vue';
import App from './App.vue';
import ChiliUI from '@chili-ui/components';

const app = createApp(App);

app.use(ChiliUI);
app.mount('#play');
