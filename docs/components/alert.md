# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

<ul>
<li>当某个页面需要向用户显示警告的信息时。
</li>
<li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
</li>
</ul>

## 基础用法

:::demo 最简单的用法，适用于简短的警告提示。

```vue
<template>
    <n-alert message="Success Text" type="success" />
</template>
```

:::

## 四种样式

:::demo 共有四种样式 success、info、warning、error。

```vue
<template>
    <n-alert message="Success Text" type="success" />
    <br />
    <n-alert message="Info Text" type="info" />
    <br />
    <n-alert message="Warning Text" type="warning" />
    <br />
    <n-alert message="Error Text" type="error" />
</template>
```

:::

## 可关闭的提示

:::demo 显示关闭按钮，点击可关闭警告提示。

```vue
<template>
    <n-alert message="Success Text" type="success" closable />
    <br />
    <n-alert message="Info Text" type="info" closable />
    <br />
    <n-alert message="Warning Text" type="warning" closable />
    <br />
    <n-alert message="Error Text" type="error" closable />
</template>
```

:::

## 图标

:::demo 可口的图标让信息类型更加醒目。

```vue
<template>
    <n-alert message="Success Tips" type="success" show-icon />
    <br />
    <n-alert message="Informational Notes" type="info" show-icon />
    <br />
    <n-alert message="Warning" type="warning" show-icon />
    <br />
    <n-alert message="Error" type="error" show-icon />
    <br />
    <n-alert
        message="Success Tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        show-icon
    />
    <br />
    <n-alert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        show-icon
    />
    <br />
    <n-alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        show-icon
    />
    <br />
    <n-alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        show-icon
    />
</template>
```

:::

## 边框

:::demo 不显示边框

```vue
<template>
    <n-alert message="Success Text" type="success" :border="false" />
    <br />
    <n-alert message="Info Text" type="info" :border="false" />
    <br />
    <n-alert message="Warning Text" type="warning" :border="false" />
    <br />
    <n-alert message="Error Text" type="error" :border="false" />
</template>
```

:::

## Alert 属性

| 属性名      | 说明         | 类型                               | 默认值    |
| ----------- | ------------ | ---------------------------------- | --------- |
| title       | Alert 标题。 | string                             | ''        |
| type        | Alert 类型。 | 'success'/'warning'/'info'/'error' | `warning` |
| description | 描述性文本   | string                             | —         |
| closable    | 是否可关闭   | boolean                            | false     |
| color       | badge 颜色   | string                             | —         |

## Badge 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
