<template>
    <div
        :class="[
            `${prefixCls}`,
            justify && `${prefixCls}-${justify}`,
            align && `${prefixCls}-${align}`,
        ]"
        :style="{ rowGap: '0px' }"
    >
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { rowProps } from './rowTypes';
defineOptions({
    name: 'NRow',
});

defineProps(rowProps);
const { prefixCls } = useConfigInject('row');
</script>
<style lang="less" scoped>
    @import "../style/row.less";
</style>