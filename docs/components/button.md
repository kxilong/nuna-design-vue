# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Nuna Design Vue 中我们提供了五种按钮。

<ul>
<li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
<li>默认按钮：用于没有主次之分的一组行动点。</li>
<li>虚线按钮：常用于添加操作</li>
<li>文本按钮：用于最次级的行动点。</li>
<li>链接按钮：一般用于链接，即导航至某位置。</li>
</ul>

以及四种状态属性与上面配合使用。

<ul>
<li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li>
<li>禁用：行动点不可用的时候，一般需要文案解释。</li>
<li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li>
</ul>

## 按钮类型

:::demo 使用 type、plain、round 和 circle 来定义按钮的样式。

```vue
<template>
    <div class="demo-spacing">
        <n-button>Default</n-button>
        <n-button type="primary">Primary</n-button>
        <n-button type="dashed">dashed</n-button>
        <n-button type="warning">warning</n-button>
        <n-button type="success">success</n-button>
        <n-button type="error">error</n-button>
    </div>
    <br />
    <div class="demo-spacing">
        <n-button shape="round">Default</n-button>
        <n-button type="primary" shape="round">Primary</n-button>
        <n-button type="dashed" shape="round">dashed</n-button>
        <n-button type="warning" shape="round">warning</n-button>
        <n-button type="success" shape="round">success</n-button>
        <n-button type="error" shape="round">error</n-button>
    </div>
    <br />
    <div class="demo-spacing">
        <n-button type="primary" shape="circle">
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
        </n-button>
        <n-button type="success" shape="circle">
            <svg
                width="14"
                height="14"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 6H6V17H20V6Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M42 31H28V42H42V31Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M42 6H28V23H42V6Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M20 25H6V42H20V25Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
            </svg>
        </n-button>
        <n-button type="error" shape="circle">
            <svg
                width="14"
                height="14"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.8657 7.46924C16.3036 9.21181 16 11.0705 16 13C16 22.9411 24.0589 31 34 31C36.5346 31 38.9468 30.4762 41.1343 29.5308C38.8006 36.766 32.0116 42 24 42C14.0589 42 6 33.9411 6 24C6 16.5935 10.4734 10.2317 16.8657 7.46924Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M31.6605 10H41L31 18H41"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </n-button>
        <n-button type="warning" shape="circle">
            <svg
                width="14"
                height="14"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 4H41"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M7 44H41"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
                <path
                    d="M21 15H27"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M19 38H29"
                    stroke="#ffffff"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </n-button>
    </div>
</template>
```

:::

## 禁用状态

:::demo 使用 type、plain、round 和 circle 来定义按钮的样式。

```vue
<template>
    <div class="demo-spacing">
        <n-button disabled>Default</n-button>
        <n-button type="primary" disabled>Primary</n-button>
        <n-button type="dashed" disabled>dashed</n-button>
        <n-button type="warning" disabled>warning</n-button>
        <n-button type="success" disabled>success</n-button>
        <n-button type="error" disabled>error</n-button>
    </div>
</template>
```

:::

## 图标按钮

:::demo 使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

```vue
<template>
    <div class="demo-spacing">
        <n-button type="primary">
            <template #icon>
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
            Primary
        </n-button>
        <n-button type="warning">
            <template #icon>
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
            Primary
        </n-button>
        <n-button type="success">
            <template #icon>
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
            Primary
        </n-button>
        <n-button type="error">
            <template #icon>
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
            Primary
        </n-button>
        <n-button type="success">
            <template #icon>
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
        </n-button>
    </div>
</template>
```

:::

## 加载状态按钮

:::demo 点击按钮来加载数据，并向用户反馈加载状态。

```vue
<template>
    <div class="demo-spacing">
        <n-button type="primary" loading>Loading</n-button>
        <n-button type="warning" loading>warning</n-button>
        <n-button type="success" loading>success</n-button>
        <n-button type="error" loading>error</n-button>
    </div>
</template>
```

:::

## 调整尺寸

:::demo 除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

```vue
<template>
    <div class="demo-spacing">
        <n-button size="large">Large</n-button>
        <n-button>Default</n-button>
        <n-button size="small">Small</n-button>
    </div>
</template>
```

:::

## Button 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | large / default /small | — |
| type | 类型 | string | primary / success / warning / error / info / text / dashed / link | — |
| shape | 设置按钮形状 | string | circle / default /round | — |
| loading | 设置按钮载入状态 | boolean | — | false |
| autoInsertSpace | 只有两个汉字时是否添加空格 | boolean | — | true |

## Button 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |
| icon   | 自定义图标组件 |

## Button 事件

| 插槽名 | 说明             | 回调参数          |
| ------ | ---------------- | ----------------- |
| click  | 点击按钮时的回调 | `(event) => void` |

::: tip

#### 如何移除 2 个汉字之间的空格

根据 Nuna Design 设计规范要求，我们会在按钮内(文本按钮和链接按钮除外)只有两个汉字时自动添加空格，如果你不需要这个特性，可以设置 autoInsertSpace 为 false。

<div>
    <n-button type="primary">按钮</n-button>
</div>
:::
