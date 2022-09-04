<template>
    <button
        :class="[
            `${prefixCls}`,
            `${prefixCls}-${type}`,
            `${prefixCls}-${size}`,
            shape && `${prefixCls}-${shape}`,
            loading && `${prefixCls}-loading`,
        ]"
        type="button"
        @click="handleClick"
    >
        <span :class="`${prefixCls}-loading-icon`" v-if="loading">
            <span class="anticon">
                <svg
                    focusable="false"
                    class="anticon-spin"
                    data-icon="loading"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 1024 1024"
                >
                    <path
                        d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                    ></path>
                </svg>
            </span>
        </span>
        <span v-if="$slots?.icon" class="anticon">
            <slot name="icon" />
        </span>
        <span v-if="$slots?.default" :class="{ expand: shouldAddSpace }">
            <slot name="default" />
        </span>
    </button>
</template>

<script lang="ts" setup>
import { computed, Text, useSlots } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { buttonEmits, buttonProps } from './buttonTypes';

defineOptions({
    name: 'NButton',
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const { prefixCls } = useConfigInject('button');
const slots = useSlots();

const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.();

    if (defaultSlot?.length == 1) {
        const slot = defaultSlot[0];
        if (props.autoInsertSpace && slot.type == Text) {
            const text = slot.children as string;
            return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
    }
    return false;
});

const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
};
</script>
