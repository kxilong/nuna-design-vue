/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-30 11:07:23
 * Copyright © YourCompanyName All rights reserved
 */
import { SizeType } from '../../config-provider';
import { ExtractPropTypes, PropType } from 'vue';

type buttonTypes = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';

const buttonProps = {
    size: {
        type: String as PropType<SizeType>,
        default: 'middle',
    },
    type: {
        type: String as PropType<buttonTypes>,
        default: 'default',
    },
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;

export default buttonProps;
