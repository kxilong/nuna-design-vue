# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

<ul>
<li>适合行内元素的水平间距。</li>
<li>可以设置各种水平对齐方式。</li>
</ul>

## 基础用法

:::demo 相邻组件水平间距。

```vue
<template>
    <n-space>
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
</template>
```

:::

## 垂直布局

:::demo 使用 direction 来控制布局的方式, 背后实际上是利用了 flex-direction 来控制.

```vue
<template>
    <n-space direction="vertical">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
</template>
```

:::

## 控制间距的大小

:::demo 通过调整 size 的值来控制间距的大小。通过 size 控制组件大小 small, default, large, 分别对应 8px, 12px, 16px 的间距. 默认的间距大小为 small，也就是 8px。

```vue
<template>
    <n-divider orientation="left">size:small</n-divider>
    <n-space size="small">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
    <n-divider orientation="left">size:middle</n-divider>
    <n-space size="middle">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
    <n-divider orientation="left">size:large</n-divider>
    <n-space size="large">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
</template>
<script setup>
import { ref } from 'vue';

const size = ref(18);

const handleClick = () => {
    size.value = size.value + 2;
};
</script>
```

:::

## 自定义尺寸

:::demo 自定义间距大小。

```vue
<template>
    <n-button type="primary" @click="handleClick" :disabled="size == 100">间距+2</n-button>
    <br />
    <br />
    <n-space :size="size">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
</template>
<script setup>
import { ref } from 'vue';

const size = ref(18);

const handleClick = () => {
    size.value = size.value + 2;
};
</script>
```

:::

## 行间分隔符

有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。

## 字母数字类型分隔符

:::demo

```vue
<template>
    <n-space spacer="|">
        <n-button type="primary">primary</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </n-space>
</template>
```

:::

## 对齐方式

:::demo 设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 align-items 一致

```vue
<template>
    <div class="space-align-container">
        <div class="space-align-block">
            <n-space align="center">
                center
                <n-button type="primary">Primary</n-button>
                <span class="mock-block">Block</span>
            </n-space>
        </div>
        <div class="space-align-block">
            <n-space align="start">
                start
                <n-button type="primary">Primary</n-button>
                <span class="mock-block">Block</span>
            </n-space>
        </div>
        <div class="space-align-block">
            <n-space align="end">
                end
                <n-button type="primary">Primary</n-button>
                <span class="mock-block">Block</span>
            </n-space>
        </div>
        <div class="space-align-block">
            <n-space align="baseline">
                baseline
                <n-button type="primary">Primary</n-button>
                <span class="mock-block">Block</span>
            </n-space>
        </div>
    </div>
</template>

<style scoped>
.space-align-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.space-align-block {
    margin: 8px 4px;
    border: 1px solid #40a9ff;
    padding: 4px;
    flex: none;
}
.space-align-block .mock-block {
    display: inline-block;
    padding: 32px 8px 16px;
    background: rgba(150, 150, 150, 0.2);
}
</style>
```

:::

## Space 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 对齐的方式 | string | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | `center` |
| direction | 排列的方向 | string | vertical/horizontal | horizontal |
| size | 间隔大小 | string / number / [number, number] | - | 'small' |
| spacer | 间隔符 | string | string / number | - |

## Space 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 需要添加间隔的元素 |
