<template>
    <div
        :class="[
            prefixCls,
            `${prefixCls}-${type}`,
            dashed && `${prefixCls}-dashed`,
            $slots?.default && `${prefixCls}-with-text`,
            orientation !== 'center' && `${prefixCls}-with-text-${orientation}`,
        ]"
    >
        <span :class="`${prefixCls}-inner-text`" v-if="$slots?.default">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { dividerProps } from './dividerTypes';

defineOptions({
    name: 'NDivider',
});

const { prefixCls } = useConfigInject('divider');
defineProps(dividerProps);
</script>
