<template>
    <div :class="[`${prefixCls}`]">
        <div :class="`${prefixCls}-header`" @click="clickCollapseHeader">
            <div>
                <span
                    role="img"
                    aria-label="right"
                    :class="`anticon anticon-right ${prefixCls}-arrow`"
                >
                    <svg
                        focusable="false"
                        class=""
                        data-icon="right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        viewBox="64 64 896 896"
                        :style="{ transform: isActive ? 'rotate(90deg)' : '' }"
                    >
                        <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                        ></path>
                    </svg>
                </span>
            </div>
            {{ header }}
        </div>
        <div
            v-show="isActive"
            :class="[
                `${prefixCls}-content`,
                isActive ? `${prefixCls}-content-active` : `${prefixCls}-content-inactive`,
            ]"
        >
            <div :class="`${prefixCls}-content-box`">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { collapseItemProps } from './collapseItemTypes';
import { computed, inject } from 'vue';
import { collapseContextKey } from '@nuna-ui/utils/tokens/collapse';

defineOptions({
    name: 'NCollapseItem',
});

const { prefixCls } = useConfigInject('collapse-item');
const props = defineProps(collapseItemProps);
const collapse = inject(collapseContextKey);

const isActive = computed(() => {
    if (Array.isArray(collapse?.activeNames.value)) {
        return collapse?.activeNames.value.includes(props.name);
    } else {
        return collapse?.activeNames.value == props.name;
    }
});

const clickCollapseHeader = () => {
    collapse?.handleItemClick(props.name);
};
</script>
<style lang="less" scoped>
    @import "../style/collapse.less";
</style>