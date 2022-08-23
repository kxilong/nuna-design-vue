<template>
  <div :class="[$slots.default && sSpinning && `${prefixCls}-nested-loading`]">
    <div v-if="sSpinning">
      <div :class="[`${prefixCls}`, `${prefixCls}-spinning`]">
        <span :class="[`${prefixCls}-dot`, `${prefixCls}-dot-spin`]" :style="dotStyle">
          <i
            v-for="(item, index) in dotItems"
            :class="[`${prefixCls}-dot-item`]"
            :key="index"
            :style="dotItemStyle"
          ></i>
        </span>
        <div :class="[`${prefixCls}-text`]">{{ tip }}</div>
      </div>
    </div>
    <div
      :class="[`${prefixCls}-container`, sSpinning && `${prefixCls}-blur`]"
      v-if="$slots?.default"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { computed, ref, onMounted, onUpdated, nextTick, defineOptions } from 'vue';
import spinProps from './spinTypes';
import debounce from 'lodash-es/debounce';

defineOptions({
  name: 'NSpin',
});

const shouldDelay = (spinning?: boolean, delay?: number): boolean => {
  return !!spinning && !!delay && !Number.isNaN(delay);
};

const props = defineProps(spinProps);
const { prefixCls } = useConfigInject('spin');
const dotItems = new Array(4);
const sSpinning = ref<boolean>(shouldDelay(props?.spinning, props?.delay));
let originalUpdateSpinning: () => void;

const dotStyle = computed(() => {
  let styleStr = '';
  if (props.size === 'small') {
    styleStr = 'width:14px;height:14px';
  } else if (props.size === 'large') {
    styleStr = 'width:32px;height:32px';
  }
  return styleStr;
});

const dotItemStyle = computed(() => {
  let styleStr = '';
  if (props.size === 'small') {
    styleStr = 'width:6px;height:6px';
  } else if (props.size === 'large') {
    styleStr = 'width:14px;height:14px';
  }
  return styleStr;
});

let updateSpinning = () => {
  console.log(sSpinning.value, props.spinning);

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

// --created

onMounted(() => {
  originalUpdateSpinning = updateSpinning;
  debouncifyUpdateSpinning();
  updateSpinning();
  console.log('onMounted');
});

onUpdated(() => {
  nextTick(() => {
    // debouncifyUpdateSpinning();
    // updateSpinning();
    console.log('onUpdated');
  });
});
</script>
