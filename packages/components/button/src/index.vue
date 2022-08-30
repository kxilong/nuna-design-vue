<template>
    <button
        :class="[`${prefixCls}`, `${prefixCls}-${type}`, `${prefixCls}-${size}`]"
        type="button"
        @click="handleClick"
    >
        <span v-if="$slots?.default" class="n-base-content"><slot /></span>
    </button>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { buttonEmits, buttonProps } from './buttonTypes';

defineOptions({
    name: 'NButton',
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const { prefixCls } = useConfigInject('button');
console.log(props);
const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
};
</script>
