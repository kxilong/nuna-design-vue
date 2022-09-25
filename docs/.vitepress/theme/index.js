// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import { registerComponents } from './register-components.js';
import '@nuna-ui/theme-chalk/src/index.less';
import './styles/index.less';
import NunaDesignVue from '../../../dist';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(NunaDesignVue);
        registerComponents(app);
    },
};
