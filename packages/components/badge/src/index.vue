<template>
    <span :class="`${prefixCls}`">
        <slot></slot>
        <sup
            :class="[
                `${prefixCls}-count`,
                type && `${prefixCls}-${type}`,
                isDot && `${prefixCls}-dot`,
            ]"
            :style="{ background: color }"
        >
            {{ countNumber }}
        </sup>
    </span>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { badgeProps } from './badgeTypes';

defineOptions({
    name: 'NBadge',
});

const props = defineProps(badgeProps);
const { prefixCls } = useConfigInject('badge');

const countNumber = computed(() => {
    if (props.isDot) {
        return '';
    }

    if (props.max) {
        return Number(props.count) > Number(props.max) ? `${props.max}+` : props.count;
    } else {
        return props.count;
    }
});
</script>
<style lang="less" scoped>
    @import '../style/badge.less';
</style>