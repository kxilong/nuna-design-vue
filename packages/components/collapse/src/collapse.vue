<template>
    <div :class="[`${prefixCls}`]">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { collapseProps } from './collapseTypes';
import { ref, watch, provide } from 'vue';
import { collapseContextKey } from '@nuna-ui/utils/tokens/collapse';
import { collapseEmits } from './collapseTypes';

defineOptions({
    name: 'NCollapse',
});

const props = defineProps(collapseProps);
const emit = defineEmits(collapseEmits);
const { prefixCls } = useConfigInject('collapse');
const activeNames = ref(props.value);

watch(
    () => props.value,
    () => {
        activeNames.value = props.value;
    },
);

const setActiveNames = _avtiveNames => {
    activeNames.value = _avtiveNames;
    emit('update:value', _avtiveNames);
};

const handleItemClick = name => {
    if (props.accordion) {
        const _activeName = activeNames.value != name && name;
        setActiveNames(_activeName);
    } else {
        if (Array.isArray(activeNames.value)) {
            const _activeNames = [...activeNames.value];
            const index = _activeNames.indexOf(name);

            if (index > -1) {
                _activeNames.splice(index, 1);
            } else {
                _activeNames.push(name);
            }
            setActiveNames(_activeNames);
        }
    }
};

provide(collapseContextKey, { activeNames, handleItemClick });
</script>
