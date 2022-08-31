/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-30 11:07:23
 * Copyright © YourCompanyName All rights reserved
 */
import { SizeType } from '../../config-provider';
import { ExtractPropTypes, PropType } from 'vue';
import PropTypes from '@nuna-ui/utils/vue-types';

type buttonTypes = 'primary' | 'dashed' | 'link' | 'text' | 'default' | 'warning' | 'success';
type shapeTypes = 'default' | 'circle' | 'round';

export const buttonProps = {
    size: {
        type: String as PropType<SizeType>,
        default: 'middle',
    },
    type: {
        type: String as PropType<buttonTypes>,
        default: 'default',
    },
    loading: PropTypes.bool,
    shape: {
        type: String as PropType<shapeTypes>,
        default: 'default',
    },
    autoInsertSpace: PropTypes.bool,
};

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonEmits = typeof buttonEmits;

export default buttonProps;
