<!--
author:        changan <740394554@qq.com>
date:          2022-09-06 13:56:26
component:     input
Copyright © YourCompanyName All rights reserved
-->
<template>
    <n-input v-model:value="value" placeholder="Basic usage" />
    <p></p>
    <n-input v-model="value" placeholder="Basic usage" @input="handleInput" @change="handleChange">
        <template #prefix>￥</template>
        <template #suffix>
            <add-user theme="outline" size="24" fill="#333" />
        </template>
    </n-input>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { AddUser } from '@icon-park/vue-next';
export default defineComponent({
    components: { AddUser },
    setup() {
        const value = ref('11111');

        const handleInput = value => {
            console.log(value);
        };
        const handleChange = value => {
            console.log(value);
        };

        return {
            value,
            handleInput,
            handleChange,
        };
    },
});
</script>
