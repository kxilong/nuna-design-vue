<template>
    <div :class="[`${prefixCls}`, `${prefixCls}-${span}`, `${prefixCls}-order-${order}`]">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { colProps } from './colTypes';

defineOptions({
    name: 'NCol',
});

defineProps(colProps);
const { prefixCls } = useConfigInject('col');
</script>
<style lang="less" scoped>
@import '../style/col.less';
</style>
