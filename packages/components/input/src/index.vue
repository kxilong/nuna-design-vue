<template>
    <span
        :class="[
            `${prefixCls}`,
            ($slots?.prefix || $slots?.suffix) && `${prefixCls}-group`,
            focused && `${prefixCls}-focused`,
            disabled && `is-disabled`,
        ]"
    >
        <span :class="`${prefixCls}-prefix`" v-if="$slots?.prefix">
            <slot name="prefix"></slot>
        </span>
        <span :class="`${prefixCls}-wrapper`">
            <input
                ref="input"
                :class="`${prefixCls}-inner`"
                type="text"
                :placeholder="placeholder"
                @input="handleInput"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
                :disabled="disabled"
            />
        </span>
        <span :class="`${prefixCls}-suffix`" v-if="$slots?.suffix">
            <slot name="suffix"></slot>
        </span>
    </span>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { inputProps, inputEmits } from './inputTypes';
import { computed, onMounted, shallowRef, watch, ref } from 'vue';

defineOptions({
    name: 'NInput',
});

const { prefixCls } = useConfigInject('input');
const props = defineProps(inputProps);
const emit = defineEmits(inputEmits);
const input = shallowRef<HTMLInputElement>();
const focused = ref<boolean>(false);

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

const handleFocus = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    focused.value = true;
    emit('focus', value);
    setNativeInputValue();
};

const handleBlur = (event: Event) => {
    const { value } = event.target as HTMLInputElement;

    focused.value = false;
    emit('blur', value);
    setNativeInputValue();
};

onMounted(() => {
    setNativeInputValue();
});
</script>
<style lang="less" scoped>
@import '../style/input.less';
</style>
