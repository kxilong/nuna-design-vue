<!--
author:        changan <740394554@qq.com>
date:          2022-08-31 16:51:22
component:     avatar
Copyright © YourCompanyName All rights reserved
-->
<template>
    <n-avatar>
        <template #icon>
            <Avatar />
        </template>
    </n-avatar>
    <n-avatar>U</n-avatar>
    <n-avatar>USER</n-avatar>
    <n-avatar src="https://joeschmoe.io/api/v1/random" />
    <n-avatar style="color: #f56a00; background-color: #fde3cf">U</n-avatar>
    <n-avatar style="background-color: #87d068">
        <template #icon>
            <Avatar />
        </template>
    </n-avatar>
</template>
<script setup>
import { Avatar } from '@icon-park/vue-next';
</script>
