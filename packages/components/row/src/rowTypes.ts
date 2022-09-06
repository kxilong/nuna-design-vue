import { PropType } from 'vue';

type justifyTypes = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
type alignTypes = 'top' | 'middle' | 'bottom';

export const rowProps = {
    justify: {
        type: String as PropType<justifyTypes>,
        default: 'start',
    },
    align: {
        type: String as PropType<alignTypes>,
        default: 'top',
    },
};
