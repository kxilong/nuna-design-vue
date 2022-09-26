# Collapse 折叠面板

通过折叠面板收纳内容区域

## 何时使用

<ul>
<li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
<li>'手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。</li>
</ul>

## 基础用法

:::demo 可以用来展示新消息的数量。通过设置 value 来调整标记所展示的内容，支持 Number or String 作为参数

```vue
<template>
    <n-collapse v-model:activeKey="activeKey">
        <n-collapse-item name="1" header="This is item header 1">
            <p>{{ text }}</p>
        </n-collapse-item>
        <n-collapse-item name="2" header="This is item header 2">
            <p>{{ text }}</p>
        </n-collapse-item>
        <n-collapse-item name="3" header="This is item header 3" collapsible="disabled">
            <p>{{ text }}</p>
        </n-collapse-item>
    </n-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    setup() {
        const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
        const activeKey = ref(['1']);

        watch(activeKey, val => {
            console.log(val);
        });

        return {
            text,
            activeKey,
        };
    },
});
</script>
```

:::

## 手风琴效果

:::demo 每次只能展开一个面板。

```vue
<template>
    <div class="demo-collapse">
        <n-collapse v-model="activeName" accordion>
            <n-collapse-item header="Consistency" name="1">
                <div>
                    Consistent with real life: in line with the process and logic of real life, and
                    comply with languages and habits that the users are used to;
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such as: design
                    style, icons and texts, position of elements, etc.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Feedback" name="2">
                <div>
                    Operation feedback: enable the users to clearly perceive their operations by
                    style updates and interactive effects;
                </div>
                <div>
                    Visual feedback: reflect current state by updating or rearranging elements of
                    the page.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Efficiency" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the users can
                    quickly understand and make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps the users
                    to identify and frees them from memorizing and recalling.
                </div>
            </n-collapse-item>
            <n-collapse-item header="Controllability" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do not make
                    decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to operate,
                    including canceling, aborting or terminating current operation.
                </div>
            </n-collapse-item>
        </n-collapse>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('1');
</script>
```

:::

## Collapse 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| model-value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array) | string (accordion mode) / array (non-accordion mode) | — | — |
| accordion | 是否手风琴模式。 | boolean | — | false |

## Collapse Item 属性

| 属性名 | 说明       | 类型          | 可选值 | 默认值 |
| ------ | ---------- | ------------- | ------ | ------ |
| header | 唯一标志符 | string/number | —      | —      |
| title  | 面板标题   | string        | —      | —      |
