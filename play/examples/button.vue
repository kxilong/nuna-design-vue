<!--
author:        changan <740394554@qq.com>
date:          2022-08-30 10:10:33
component:     button
Copyright © YourCompanyName All rights reserved
-->
<template>
    <n-button @click="handleClick" style="margin-right: 10px">切换11111111111111</n-button>
    <n-button type="primary" @click="handleClick" style="margin-right: 10px">
        切换11111111111111
    </n-button>
    <n-button type="warning" @click="handleClick" style="margin-right: 10px">
        切换11111111111111
    </n-button>
    <n-button type="success" @click="handleClick" style="margin-right: 10px">
        切换11111111111111
    </n-button>
    <n-button type="dashed" @click="handleClick" style="margin-right: 10px">
        切换11111111111111
    </n-button>
    <n-button type="text" @click="handleClick" style="margin-right: 10px">text</n-button>
    <n-button type="link" @click="handleClick" style="margin-right: 10px">link</n-button>
    <n-button type="error" @click="handleClick">切换11111111111111</n-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const handleClick = e => {
            console.log(e);
        };

        return {
            handleClick,
        };
    },
});
</script>
