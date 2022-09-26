# Grid 栅格

24 栅格系统。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

<ul>
<li>通过`row`在水平方向建立一组`column`（简写 col）</li>
<li>你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素</li>
<li>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `` 来创建</li>
<li>如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列</li>
</ul>

## Flex 布局

:::demo 从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

```vue
<template>
    <n-row>
        <n-col :span="12">col-12</n-col>
        <n-col :span="12">col-12</n-col>
    </n-row>
    <n-row>
        <n-col :span="8">col-8</n-col>
        <n-col :span="8">col-8</n-col>
        <n-col :span="8">col-8</n-col>
    </n-row>
    <n-row>
        <n-col :span="6">col-6</n-col>
        <n-col :span="6">col-6</n-col>
        <n-col :span="6">col-6</n-col>
        <n-col :span="6">col-6</n-col>
    </n-row>
</template>
```

:::

:::demo 子元素垂直对齐。

```vue
<template>
    <p>Align Top</p>
    <n-row type="flex" justify="center" align="top">
        <n-col :span="4">
            <p class="height-100">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-50">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-120">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-80">col-4</p>
        </n-col>
    </n-row>

    <p>Align Center</p>
    <n-row type="flex" justify="space-around" align="middle">
        <n-col :span="4">
            <p class="height-100">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-50">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-120">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-80">col-4</p>
        </n-col>
    </n-row>

    <p>Align Bottom</p>
    <n-row type="flex" justify="space-between" align="bottom">
        <n-col :span="4">
            <p class="height-100">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-50">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-120">col-4</p>
        </n-col>
        <n-col :span="4">
            <p class="height-80">col-4</p>
        </n-col>
    </n-row>
</template>
```

:::

:::demo 通过 order 来改变元素的排序。

```vue
<template>
    <n-divider orientation="left">Normal</n-divider>
    <n-row type="flex">
        <n-col :span="6" :order="4">1 col-order-4</n-col>
        <n-col :span="6" :order="3">2 col-order-3</n-col>
        <n-col :span="6" :order="2">3 col-order-2</n-col>
        <n-col :span="6" :order="1">4 col-order-1</n-col>
    </n-row>
</template>
```

:::

:::demo 通过 order 来改变元素的排序。

```vue
<template>
    <div id="components-grid-demo-flex">
        <p>sub-element align left</p>
        <n-row justify="start">
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
        </n-row>

        <p>sub-element align center</p>
        <n-row justify="center">
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
        </n-row>

        <p>sub-element align right</p>
        <n-row justify="end">
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
        </n-row>

        <p>sub-element monospaced arrangement</p>
        <n-row justify="space-between">
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
        </n-row>

        <p>sub-element align full</p>
        <n-row justify="space-around">
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
            <n-col :span="4">col-4</n-col>
        </n-row>
    </div>
</template>
```

:::

## Row

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| justify | flex 布局下的水平排列方式：start end center space-around space-between | string | `start` |
| align | flex 布局下的垂直对齐方式：top middle bottom | string | `top` |

## Col

| 属性名 | 说明                                      | 类型   | 默认值 |
| ------ | ----------------------------------------- | ------ | ------ |
| span   | 栅格占位格数，为 0 时相当于 display: none | number | 0      |
| order  | 栅格顺序，flex 布局模式下有效             | number | 0      |
