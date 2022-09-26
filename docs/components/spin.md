# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

<ul>
<li>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
</li>
</ul>

## 基础用法

:::demo 一个简单的 loading 状态。

```vue
<template>
    <n-spin />
</template>
```

:::

## 各种大小

:::demo 小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

```vue
<template>
    <n-space>
        <n-spin size="small" />
        <n-spin />
        <n-spin size="large" />
    </n-space>
</template>
```

:::

## 容器

:::demo 放入一个容器中。

```vue
<template>
    <div class="example">
        <n-spin />
    </div>
</template>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
```

:::

## 内容加载

:::demo 可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

```vue
<template>
    <div class="example">
        <n-spin :spinning="spinning" />
    </div>
    <n-button type="primary" @click="changeSpinning">切换Loading状态（{{ spinning }}）</n-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(false);

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };

        return {
            spinning,
            changeSpinning,
        };
    },
});
</script>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
```

:::

## 自定义描述文案

:::demo

```vue
<template>
    <div class="example">
        <n-spin tip="Loading..." />
    </div>
</template>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
```

:::

## 延迟

:::demo 延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

```vue
<template>
    <div class="example">
        <n-spin :spinning="spinning" :delay="delayTime" />
    </div>
    <n-button type="primary" @click="changeSpinning">切换Loading状态（{{ spinning }}）</n-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };

        return {
            spinning,
            delayTime,
            changeSpinning,
        };
    },
});
</script>

<style scoped>
.example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
}
</style>
```

:::

## Spin 属性

| 属性名   | 说明                                  | 类型          | 默认值   |
| -------- | ------------------------------------- | ------------- | -------- |
| delay    | 延迟显示加载效果的时间（防止闪烁）    | number (毫秒) | -        |
| size     | 组件大小，可选值为 small middle large | string        | `middle` |
| spinning | 是否为加载中状态                      | boolean       | true     |
| tip      | 当作为包裹元素时，可以自定义描述文案  | string        | -        |
