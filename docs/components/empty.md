# Empty 空状态

空状态时的展示占位图。

## 何时使用

<ul>
<li>当目前没有数据时，用于显式的用户提示。</li>
<li>初始化场景时的引导创建流程。</li>
</ul>

## 基础用法

:::demo

```vue
<template>
    <n-empty />
</template>
```

:::

# 自定义图片

:::demo 通过设置 image 属性传入图片 URL。

```vue
<template>
    <n-empty
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    />
</template>
```

:::

## 自定义 description

:::demo

```vue
<template>
    <n-empty description="自定义description" />
</template>
```

:::

## Empty 属性

| 属性名      | 说明     | 类型   | 可选值 | 默认值 |
| ----------- | -------- | ------ | ------ | ------ |
| image       | 图片地址 | string | —      | —      |
| description | 描述     | string | —      | —      |
