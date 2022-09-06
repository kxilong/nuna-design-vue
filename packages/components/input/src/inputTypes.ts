/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-06 14:02:16
 * Copyright © YourCompanyName All rights reserved
 */
import PropTypes from 'vue-types';

export const inputProps = {
    modelValue: {
        type: [String || Number || Object],
        default: '',
    },
    placeholder: PropTypes.string,
};

export const inputEmits = {
    ['update:modelValue']: (value: string) => value,
    input: (value: string) => value,
    change: (value: string) => value,
    blur: (value: string) => value,
    focus: (value: string) => value,
};
