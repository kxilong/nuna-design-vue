<template>
    <div :class="[`${prefixCls}`, ($slots?.prefix || $slots?.suffix) && `${prefixCls}-group`]">
        <div :class="`${prefixCls}-group-prepend`" v-if="$slots?.prefix">
            <slot name="prefix"></slot>
        </div>
        <div :class="`${prefixCls}-wrapper`">
            <input
                ref="input"
                :class="`${prefixCls}-inner`"
                type="text"
                :placeholder="placeholder"
                @input="handleInput"
                @change="handleChange"
            />
        </div>
        <div :class="`${prefixCls}-group-append`" v-if="$slots?.suffix">
            <slot name="suffix"></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { inputProps, inputEmits } from './inputTypes';
import { computed, onMounted, shallowRef, watch } from 'vue';

defineOptions({
    name: 'NInput',
});

const { prefixCls } = useConfigInject('input');
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
const input = shallowRef<HTMLInputElement>();

const _ref = computed(() => input.value);

const nativeInputValue = computed(() => {
    return String(props.modelValue);
});

watch(nativeInputValue, () => setNativeInputValue());

const setNativeInputValue = () => {
    const input = _ref.value;
    if (!input || input.value === nativeInputValue.value) return;
    input.value = nativeInputValue.value;
};

const handleInput = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    if (value === nativeInputValue.value) return;

    emit('update:modelValue', value);
    emit('input', value);
    setNativeInputValue();
};

const handleChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    emit('change', value);
    setNativeInputValue();
};

onMounted(() => {
    setNativeInputValue();
});
</script>
