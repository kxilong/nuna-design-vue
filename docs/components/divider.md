# Divider 分割线

区隔内容的分割线。

## 何时使用

<ul>
<li>对不同章节的文本段落进行分割。</li>
<li>对行内文字/链接进行分割，例如表格的操作列。</li>
</ul>

## 基础用法

:::demo 对不同段落的文本进行分割。

```vue
<template>
    <div>
        <span>
            I sit at my window this morning where the world like a passer-by stops for a moment,
            nods to me and goes.
        </span>
        <n-divider />
        <span>
            There little thoughts are the rustle of leaves; they have their whisper of joy in my
            mind.
        </span>
    </div>
</template>
```

:::

## 设置文案

:::demo 可以在分割线上自定义文本内容。

```vue
<template>
    <div>
        <span>What you are you do not see, what you see is your shadow.</span>
        <n-divider orientation="left">Rabindranath Tagore</n-divider>
        <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
        <n-divider>Rabindranath Tagore</n-divider>
        <span>I cannot choose the best. The best chooses me.</span>
        <n-divider orientation="right">Rabindranath Tagore</n-divider>
    </div>
</template>
```

:::

## 虚线

:::demo 您可以设置分隔符的样式。

```vue
<template>
    <div>
        <span>What language is thine, O sea?</span>
        <n-divider dashed />
        <span>The language of eternal question.</span>
    </div>
    <n-divider dashed />
    <span>What language is thy answer, O sky?</span>
    <n-divider dashed />
</template>
```

:::

## 垂直分隔线

:::demo

```vue
<template>
    <div>
        <span>Rain</span>
        <n-divider type="vertical" />
        <span>Home</span>
        <n-divider type="vertical" dashed />
        <span>Grass</span>
    </div>
</template>
```

:::

## Space 属性

| 属性名      | 说明                   | 类型   | 可选值                | 默认值     |
| ----------- | ---------------------- | ------ | --------------------- | ---------- | ------- |
| type        | 设置分割线方向         | string | horizontal / vertical | horizontal |
| orientation | 自定义分隔线内容的位置 | string | left / right / center | -          | 'center |
| dashed      | 设置分隔符样式         | string | boolean               | -          | false   |
