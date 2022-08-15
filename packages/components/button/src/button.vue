<template>
  <button @click="handlerClick">Primary</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CButton',
  setup() {
    const handlerClick = () => {
      alert('WQ!!!!!!');
    };

    return {
      handlerClick,
    };
  },
});
</script>
