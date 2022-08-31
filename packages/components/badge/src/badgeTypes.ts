import { PropType } from 'vue';
import PropTyps from 'vue-types';

type badgeTypes = 'primary' | 'success' | 'warning' | 'danger';

export const badgeProps = {
    count: PropTyps.string || PropTyps.number,
    color: PropTyps.string,
    isDot: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<badgeTypes>,
        default: 'danger',
    },
    max: PropTyps.number,
};
