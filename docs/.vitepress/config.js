export default {
  base: '/nuna-ui/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }]],
  themeConfig: {
    siteTitle: 'Nuna-ui',
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/button/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/kxilong/nuna-ui' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button按钮',
              link: '/examples/button/',
            },
            {
              text: 'Icon图标',
              link: '/examples/Icon/',
            },
          ],
        },
      ],
    },
  },
};
