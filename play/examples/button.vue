<!--
author:        changan <740394554@qq.com>
date:          2022-08-30 10:10:33
component:     button
Copyright © YourCompanyName All rights reserved
-->
<template>
    <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
        <n-button @click="handleClick" block :loading="true">切换11111111111111</n-button>
        <br />
        <n-button type="primary" @click="handleClick" :loading="loading" block>
            <template #icon>
                <lightning theme="outline" size="14" fill="#fff" strokeLinecap="square" />
            </template>
            切换11111111111111
        </n-button>
        <br />
        <n-button type="warning" @click="handleClick" block>切换11111111111111</n-button>
        <br />
        <n-button type="success" @click="handleClick" block>切换11111111111111</n-button>
        <br />
        <n-button type="dashed" @click="handleClick" block>切换11111111111111</n-button>
        <br />
        <n-button type="text" @click="handleClick" block>text</n-button>
        <br />
        <n-button type="link" @click="handleClick" block>link</n-button>
        <br />
        <n-button type="error" @click="handleClick" shape="round">切换</n-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Lightning } from '@icon-park/vue-next';
export default defineComponent({
    components: {
        Lightning,
    },
    setup() {
        let loading = ref(false);
        const handleClick = () => {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
            }, 3000);
        };

        return {
            handleClick,
            loading,
        };
    },
});
</script>
