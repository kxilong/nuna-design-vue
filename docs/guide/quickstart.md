# 快速上手

## 使用组件

```bash
$ npm i --save nuna-design-vue
```

## 注册

1. 全局注册

```vue
import { createApp } from "vue"; 
import "./style.css"; 
import App from "./App.vue"; 
import NunaDesignVue from "nuna-design-vue"; 
import "nuna-design-vue/style.css"; 

const app = createApp(App); 
app.use(NunaDesignVue); 
app.mount("#app");
```

2. 全局部分注册

```vue
import { createApp } from "vue"; 
import "./style.css"; 
import App from "./App.vue"; 
import { NButton } from "nuna-design-vue"; 
import "nuna-design-vue/button/style.css"; 
const app = createApp(App);

app.use(NButton); 
app.mount("#app");
```
