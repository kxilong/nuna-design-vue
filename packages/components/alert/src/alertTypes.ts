import PropTypes from 'vue-types';
import { PropType } from 'vue';

type types = 'info' | 'success' | 'warning' | 'error';

export const alertProps = {
    title: PropTypes.string,
    type: {
        type: String as PropType<types>,
        value: 'warning',
    },
    message: PropTypes.string,
    description: PropTypes.string,
    closable: {
        type: Boolean,
        default: false,
    },
    border: PropTypes.bool,
};
