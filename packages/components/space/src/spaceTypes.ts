/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-02 14:41:23
 * Copyright © YourCompanyName All rights reserved
 */

import { PropType } from 'vue';
import { componentSizes } from '@nuna-ui/utils/constants/size';

type alignTypes = 'start' | 'end' | 'center' | 'baseline';
type directionTypes = 'vertical' | 'horizontal';

export const spaceProps = {
    align: {
        type: String as PropType<alignTypes>,
        default: 'center',
    },
    direction: {
        type: String as PropType<directionTypes>,
        default: 'horizontal',
    },
    size: {
        type: [String, Number],
        values: componentSizes,
        default: 'small',
    },
    spacer: {
        type: [String, Number],
    },
};
