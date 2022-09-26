import { sidebars } from './config/sidebars';

export default {
    base: '/nuna-design-vue/',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
    themeConfig: {
        siteTitle: 'Nuna Design',
        description: 'A Vue.js UI library.',
        logo: '/logo.svg',
        nav: [
            { text: '指南', link: '/guide/introduce' },
            { text: '组件', link: '/components/button' },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/kxilong/nuna-ui' }],
        sidebar: sidebars,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present 板栗🌰',
        },
        demoblock: {
            '/': {
                'hide-text': 'Hide',
                'show-text': 'Expand',
                'copy-button-text': 'Copy',
                'copy-success-text': 'Copy success',
            },
            '/zh': {
                'hide-text': '隐藏代码',
                'show-text': '显示代码',
                'copy-button-text': '复制代码片段',
                'copy-success-text': '复制成功',
            },
        },
    },
    markdown: {
        config: md => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock');
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'less',
            });
        },
    },
};
