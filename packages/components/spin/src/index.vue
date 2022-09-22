<template>
    <div :class="[$slots.default && sSpinning && `${prefixCls}-nested-loading`]">
        <div v-if="sSpinning">
            <div
                :class="[
                    `${prefixCls}`,
                    `${prefixCls}-${size}`,
                    `${prefixCls}-spinning`,
                    tip && `${prefixCls}-show-text`,
                ]"
            >
                <span :class="[`${prefixCls}-dot`, `${prefixCls}-dot-spin`]">
                    <i
                        v-for="(item, index) in dotItems"
                        :class="[`${prefixCls}-dot-item`]"
                        :key="index"
                    />
                </span>
                <div v-if="tip" :class="[`${prefixCls}-text`]">{{ tip }}</div>
            </div>
        </div>
        <div
            v-if="$slots?.default"
            :class="[`${prefixCls}-container`, sSpinning && `${prefixCls}-blur`]"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { ref, onMounted, onUpdated, nextTick, onUnmounted } from 'vue';
import spinProps from './spinTypes';
import debounce from 'lodash-es/debounce';

defineOptions({
    name: 'NSpin',
});

const props = defineProps(spinProps);
const { prefixCls } = useConfigInject('spin');
const dotItems = new Array(4);

const shouldDelay = (spinning?: boolean, delay?: number): boolean => {
    return !!spinning && !!delay && !Number.isNaN(delay);
};

const shouldBeDelayed = shouldDelay(props?.spinning, props?.delay);
const sSpinning = ref<boolean>(props.spinning && !shouldBeDelayed);
let originalUpdateSpinning = null;

let updateSpinning = () => {
    if (sSpinning.value !== props.spinning) {
        sSpinning.value = props.spinning;
    }
};

const cancelExistSpin = () => {
    if (updateSpinning && (updateSpinning as any).cancel) {
        (updateSpinning as any).cancel();
    }
};

const debouncifyUpdateSpinning = () => {
    const { delay } = props;
    if (delay) {
        cancelExistSpin();
        updateSpinning = debounce(originalUpdateSpinning, delay);
    }
};

onMounted(() => {
    originalUpdateSpinning = updateSpinning as any;
    debouncifyUpdateSpinning();
    updateSpinning();
});

onUpdated(() => {
    nextTick(() => {
        debouncifyUpdateSpinning();
        updateSpinning();
    });
});

onUnmounted(() => {
    cancelExistSpin();
});
</script>
<style lang="less" scoped>
    @import '../style/spin.less';
</style>