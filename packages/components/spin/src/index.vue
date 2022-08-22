<template>
  <div :class="[prefixCls, `${prefixCls}-spinning`]">
    <!-- <span :class="[`${prefixCls}-dot`, `${prefixCls}-dot-spin`]">
      <i v-for="item in [1, 1, 1, 1]" :class="[`${prefixCls}-spin-dot-item`]"></i>
    </span> -->
    <dotSpin />
  </div>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';

export default defineComponent({
  name: 'NSpin',
  props: {},
  setup() {
    // init here
    const prefixCls = useConfigInject('spin');
    const dotSpin = h(
      'span',
      {
        class: [`${prefixCls}-dot`, `${prefixCls}-dot-spin`],
      },
      'Hello Vue3js.cn',
    );

    return {
      prefixCls,
      dotSpin,
    };
  },
});
</script>
