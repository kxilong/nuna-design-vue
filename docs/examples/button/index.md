# Button 按钮

按钮用于开始一个即时操作。

#### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 形态

:::demo 通过`variant`设置按钮形态，目前支持`solid`、`outline`、`text`三种形态，默认为`outline`。

```vue
<template>
    <div class="demo-spacing">
        <n-space>
            <n-button variant="solid">Solid Button</n-button>
            <n-button>Outline Button</n-button>
            <n-button variant="text">Text Button</n-button>
        </n-space>
    </div>
</template>
```

:::
