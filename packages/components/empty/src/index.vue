<template>
    <div :class="`${prefixCls}`">
        <div :class="`${prefixCls}-image`">
            <img :src="image" alt="empty" />
        </div>
        <p :class="`${prefixCls}-description`" v-if="description">
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { emptyProps } from './emptyTypes';

defineOptions({
    name: 'NEmpty',
});

defineProps(emptyProps);
const { prefixCls } = useConfigInject('empty');
</script>
