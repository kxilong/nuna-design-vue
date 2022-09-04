/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-02 14:46:03
 * Copyright © YourCompanyName All rights reserved
 */

export const componentSizes = ['', 'middle', 'small', 'large'] as const;

export type ComponentSize = typeof componentSizes[number];

export const componentSizeMap = {
    large: 24,
    middle: 16,
    small: 8,
} as const;
