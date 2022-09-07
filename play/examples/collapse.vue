<!--
author:        changan <740394554@qq.com>
date:          2022-09-07 11:17:54
component:     collapse
Copyright © YourCompanyName All rights reserved
-->
<template>
    <n-collapse v-model:value="activeKey" accordion>
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
