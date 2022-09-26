# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

:::demo 可以用来展示新消息的数量。通过设置 value 来调整标记所展示的内容，支持 Number or String 作为参数

```vue
<template>
    <n-space size="30">
        <n-badge :count="12" class="item">
            <n-button>comments</n-button>
        </n-badge>
        <n-badge :count="3" class="item">
            <n-button>replies</n-button>
        </n-badge>
        <n-badge :count="1" class="item" type="primary">
            <n-button>comments</n-button>
        </n-badge>
        <n-badge :count="2" class="item" type="warning">
            <n-button>replies</n-button>
        </n-badge>
    </n-space>
</template>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
.el-dropdown {
    margin-top: 1.1rem;
}
</style>
```

:::

## 最大值

:::demo 由 max 属性定义，它接受一个 Number， 要注意的是，该值当且仅当在 value 的值也是 Number 时生效。

```vue
<template>
    <n-space size="30">
        <n-badge :count="200" :max="99" class="item">
            <n-button>comments</n-button>
        </n-badge>
        <n-badge :count="100" :max="10" class="item">
            <n-button>replies</n-button>
        </n-badge>
    </n-space>
</template>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
```

:::

## 自定义显示内容

:::demo 当 value 是一个 String 类型当时候，你可以展示任何你想展示的内容。

```vue
<template>
    <n-space size="30">
        <n-badge count="new" class="item">
            <n-button>comments</n-button>
        </n-badge>
        <n-badge count="hot" class="item">
            <n-button>replies</n-button>
        </n-badge>
    </n-space>
</template>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
```

:::

## 小红点

:::demo 除了数字外，设置 is-dot 属性 ，它接受一个 Boolean 类型作为参数。

```vue
<template>
    <n-space size="30">
        <n-badge is-dot class="item">query</n-badge>
        <n-badge is-dot class="item">
            <n-button class="share-button" type="primary">primary</n-button>
        </n-badge>
    </n-space>
</template>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
```

:::

## 自定义徽标颜色

:::demo 除了数字外，设置 is-dot 属性 ，它接受一个 Boolean 类型作为参数。

```vue
<template>
    <n-space size="30">
        <n-badge is-dot class="item" color="lime">query</n-badge>
        <n-badge is-dot class="item" color="#f50">
            <n-button class="share-button" type="primary">primary</n-button>
        </n-badge>
    </n-space>
</template>

<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>
```

:::

## Badge 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| count | 显示值 | string | number | '' |
| max | 最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时才会工作。 | string | — | — |
| is-dot | 是否显示小圆点。 | boolean | — | false |
| type | badge 类型。 | string | 'primary'/'success'/'warning'/'error'/'info' | 'danger' |
| color | badge 颜色 | string | — | — |

## Badge 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
