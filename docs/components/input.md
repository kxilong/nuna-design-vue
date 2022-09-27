# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

<ul>
<li>需要用户输入表单域内容时。</li>
<li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>
</ul>

::: danger

Input 为受控组件，它 总会显示 Vue 绑定值。

在正常情况下，input 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 v-model)。 否则，输入框的值将不会改变。

不支持 v-model 修饰符。

:::

## 基础用法

:::demo

```vue
<template>
    <n-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');
</script>
```

:::

## 前缀后缀

:::demo 通过 disabled 属性指定是否禁用 input 组件

```vue
<template>
    <n-input v-model="value" placeholder="Basic usage">
        <template #prefix>￥</template>
        <template #suffix>RMB</template>
    </n-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');
</script>
```

:::

## Input 属性

| 属性名      | 说明           | 类型            | 可选值 | 默认值 |
| ----------- | -------------- | --------------- | ------ | ------ |
| v-model     | 绑定值         | string / number | —      | —      |
| placeholder | 输入框占位文本 | string          | —      | —      |

## Input 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |

## Input 事件

| 插槽名 | 说明                                                          | 回调参数            |
| ------ | ------------------------------------------------------------- | ------------------- |
| blur   | 在 Input 失去焦点时触发                                       | (event: FocusEvent) |
| focus  | 在 Input 获得焦点时触发                                       | (event: FocusEvent) |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按 Enter 时触发 | (value: string      | number) |
| input  | 在 Input 值改变时触发                                         | (value: string      | number) |
