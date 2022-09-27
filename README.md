<p align="center">
  <a href="https://mderp.gitee.io/nuna-design-vue/">
    <img width="200" src="https://files.catbox.moe/48dn9a.png">
  </a>
</p>

<h1 align="center">
  <a href="https://mderp.gitee.io/nuna-design-vue/" target="_blank">Nuna Design Vue</a>
</h1>

<div align="center">

An enterprise-class UI components based on Nuna Design and Vue 3.

[![npm package](https://img.shields.io/npm/v/nuna-design-vue.svg?style=flat-square)](https://www.npmjs.org/package/nuna-design-vue)

</div>

# 快速上手

## 使用组件

```bash
$ npm i --save nuna-design-vue
```

## 注册

1. 全局注册

```vue
import { createApp } from "vue"; import "./style.css"; import App from "./App.vue"; import
NunaDesignVue from "nuna-design-vue"; import "nuna-design-vue/style.css"; const app =
createApp(App); app.use(NunaDesignVue); app.mount("#app");
```

2. 全局部分注册

```vue
import { createApp } from "vue"; import "./style.css"; import App from "./App.vue"; import { NButton
} from "nuna-design-vue"; import "nuna-design-vue/button/style.css"; const app = createApp(App);
app.use(NButton); app.mount("#app");
```

## 特性

-   提炼自企业级中后台产品的交互语言和视觉风格。
-   开箱即用的高质量 Vue 组件。

## 支持环境

-   现代浏览器。
-   支持 Vue 2 和 Vue 3

## License

Nuna Design Vue is open source software licensed as MIT.

## 链接

-   [首页](https://mderp.gitee.io/nuna-design-vue/)
-   [Vue 官方文档](https://cn.vuejs.org/)
