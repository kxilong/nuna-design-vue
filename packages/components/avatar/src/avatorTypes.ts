/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-31 16:52:59
 * Copyright © YourCompanyName All rights reserved
 */
import { PropType } from 'vue';
import PropTypes from 'vue-types';
import { SizeType } from '../../config-provider';

type shapeTypes = 'circle' | 'square';

export const avatorProps = {
    icon: PropTypes.string,
    size: {
        type: String as PropType<SizeType>,
        default: 'middle',
    },
    shape: {
        type: String as PropType<shapeTypes>,
        default: 'circle',
    },
    src: PropTypes.string,
    alt: PropTypes.string,
};

export const avatorEmits = {
    error: (evt: Event) => evt instanceof Event,
};
