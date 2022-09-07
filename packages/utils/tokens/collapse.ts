/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-07 14:28:56
 * Copyright © YourCompanyName All rights reserved
 */
import type { CollapseActiveName } from '@nuna-ui/components/collapse/src/collapseTypes';
import type { InjectionKey, Ref } from 'vue';

export interface CollapseContext {
    activeNames: Ref<CollapseActiveName>;
    handleItemClick: () => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey');
