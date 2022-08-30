<template>
    <button :class="[`${prefixCls}`, `${prefixCls}-${type}`, `${prefixCls}-${size}`]" type="button">
        <span v-if="$slots?.default"><slot /></span>
        <div aria-hidden="true" :class="['n-base-wave']"></div>
    </button>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue';
import buttonProps from './buttonTypes';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';

defineOptions({
    name: 'NButton',
});

defineProps(buttonProps);
const { prefixCls } = useConfigInject('button');
</script>
