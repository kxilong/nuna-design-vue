# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基础用法

:::demo 除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

```vue
<template>
    <n-row class="demo-avatar demo-basic">
        <n-col :span="12">
            <div class="sub-title">circle</div>
            <div class="demo-basic--circle">
                <div class="block">
                    <n-avatar :size="50" :src="circleUrl" />
                </div>
                <div v-for="size in sizeList" :key="size" class="block">
                    <n-avatar :size="size" :src="circleUrl" />
                </div>
            </div>
        </n-col>
        <n-col :span="12">
            <div class="sub-title">square</div>
            <div class="demo-basic--circle">
                <div class="block">
                    <n-avatar shape="square" :size="50" :src="squareUrl" />
                </div>
                <div v-for="size in sizeList" :key="size" class="block">
                    <n-avatar shape="square" :size="size" :src="squareUrl" />
                </div>
            </div>
        </n-col>
    </n-row>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    sizeList: ['small', '', 'large'] as const,
});

const { circleUrl, squareUrl, sizeList } = toRefs(state);
</script>

<style scoped>
.demo-basic {
    text-align: center;
}

.demo-basic .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid #ebebeb;
}
.demo-basic .block:not(:last-child) {
    border-right: 1px solid #ebebeb;
}
.demo-basic .block {
    flex: 1;
}
.demo-basic .n-col:not(:last-child) {
    border-right: 1px solid #ebebeb;
}
</style>
```

:::

## 展示类型

:::demo 除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

```vue
<template>
    <div class="demo-type">
        <div>
            <n-avatar>
                <template #icon>
                    <?xml version="1.0" encoding="UTF-8"?>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="4"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                            fill="#ffffff"
                        />
                    </svg>
                </template>
            </n-avatar>
        </div>
        <div>
            <n-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
    </div>
</template>

<style scoped>
.demo-type {
    display: flex;
}
.demo-type > div {
    flex: 1;
    text-align: center;
}

.demo-type > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}
</style>
```

:::

## Avatar 属性

| 属性名 | 说明                        | 类型   | 可选值             | 默认值   |
| ------ | --------------------------- | ------ | ------------------ | -------- |
| size   | Avatar 大小                 | number | 'large' / 'middle' | `small`  |
| shape  | Avatar 形状                 | string | 'circle' /'square' | `circle` |
| src    | Avatar 图片的源地址         | string | —                  | —        |
| alt    | 图片 Avatar 的原生 alt 属性 | string | —                  | —        |

## Avatar 事件

| 插槽名 | 说明               | 回调参数          |
| ------ | ------------------ | ----------------- |
| error  | 图片加载失败时触发 | `(event) => void` |

## Avatar 插槽

| 插槽名 | 说明               |
| ------ | ------------------ |
| icon   | 自定义头像展示图标 |
