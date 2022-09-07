/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-07 11:36:59
 * Copyright © YourCompanyName All rights reserved
 */
export type CollapseActiveName = string | number;
export type ActiveKeyType = Array<string | number> | string | number;

export const collapseProps = {
    value: { type: [Array, Number, String], default: () => [] },
    accordion: {
        type: Boolean,
        default: false,
    },
};

export const collapseEmits = {
    ['update:value']: (value: string) => value,
};
