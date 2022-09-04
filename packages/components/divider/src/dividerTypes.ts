import { PropType } from 'vue';

type orientationTypes = 'left' | 'right' | 'center';
type displayTypes = 'horizontal' | 'vertical';

export const dividerProps = {
    dashed: {
        type: Boolean,
        default: false,
    },
    orientation: {
        type: String as PropType<orientationTypes>,
        default: 'center',
    },
    type: {
        type: String as PropType<displayTypes>,
        default: 'horizontal',
    },
};
