<template>
    <span
        v-if="src || $slots?.icon"
        :class="[
            `${prefixCls}`,
            `${prefixCls}-${size}`,
            `${prefixCls}-${shape}`,
            src && `${prefixCls}-image`,
        ]"
        :style="computedStyle"
    >
        <img v-if="src" :src="src" :onerror="errorHandler" />
        <span v-else-if="$slots?.icon" class="anticon">
            <slot name="icon"></slot>
        </span>
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { avatorEmits, avatorProps } from './avatorTypes';

defineOptions({
    name: 'NAvatar',
});

const props = defineProps(avatorProps);
const emit = defineEmits(avatorEmits);
const { prefixCls } = useConfigInject('avatar');

const computedStyle = computed(() => {
    const isNumber = typeof props.size == 'number';
    if (isNumber) {
        return `width: ${props.size}px; height: ${props.size}px; line-height: ${
            props.size
        }px; font-size: ${props.size / 2}px;`;
    }
    return '';
});

// loading fail callback
const errorHandler = e => {
    emit('error', e);
};
</script>
<style lang="less" scoped>
@import "../style/avatar.less";
</style>