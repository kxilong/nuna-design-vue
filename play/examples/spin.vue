<!--
author:        changan <740394554@qq.com>
date:          2022-08-30 10:01:17
component:     spin
Copyright © YourCompanyName All rights reserved
-->
<template>
    <n-spin :spinning="spinning" tip="Loading..." size="small" :delay="delayTime">
        <div class="example">Further details about the context of this alert.</div>
    </n-spin>
    <!-- <n-spin :spinning="spinning" tip="Loading..." size="small" :delay="delayTime" /> -->
    <button @click="changeSpinning">切换</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(true);
        const delayTime = 3000;

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };

        return {
            spinning,
            changeSpinning,
            delayTime,
        };
    },
});
</script>
<style scoped>
.spin-state {
    margin-top: 16px;
}

.example {
    text-align: center;
    background: #e6f7ff;
    border-radius: 4px;
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    color: #000000d9;
}
</style>
