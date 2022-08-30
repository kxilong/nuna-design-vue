/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-30 11:07:23
 * Copyright © YourCompanyName All rights reserved
 */
import { SizeType } from '../../config-provider';
import { ExtractPropTypes, PropType } from 'vue';

type buttonTypes = 'primary' | 'dashed' | 'link' | 'text' | 'default' | 'warning' | 'success';

export const buttonProps = {
    size: {
        type: String as PropType<SizeType>,
        default: 'middle',
    },
    type: {
        type: String as PropType<buttonTypes>,
        default: 'default',
    },
};

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonEmits = typeof buttonEmits;

export default buttonProps;
