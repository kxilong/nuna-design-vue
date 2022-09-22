/**
 * @author        changan <740394554@qq.com>
 * @date          2022-09-02 13:48:47
 * Copyright © YourCompanyName All rights reserved
 */
import { defineComponent, renderSlot, createVNode, h, computed } from 'vue';
import type { VNode } from 'vue';
import useConfigInject from '@nuna-ui/utils/hooks/useConfigInject';
import { spaceProps } from './spaceTypes';
import { componentSizeMap } from '@nuna-ui/utils/constants/size';
import '../style/space.less';

export default defineComponent({
    name: 'NSpace',
    props: spaceProps,
    setup(props, { slots }) {
        const { prefixCls } = useConfigInject('space');
        // eslint-disable-next-line vue/no-setup-props-destructure
        const { size } = props;
        const gapSize = computed(() => {
            return typeof Number(size) === 'number' ? `${size}px` : `${componentSizeMap[size]}px`;
        });

        return () => {
            const { direction, align, spacer } = props;
            const children = renderSlot(slots, 'default', { key: 0 }, () => []);

            if ((children.children ?? []).length === 0) return null;

            const extractedChildren: VNode[] = [];

            if (Array.isArray(children.children)) {
                children.children.forEach((child, loopKey) => {
                    const Item = h(
                        'div',
                        { class: `${prefixCls}-item`, key: `LoopKey${loopKey}` },
                        createVNode(child as VNode),
                    );
                    const spacerBox = h('span', { class: `${prefixCls}-spacer` }, spacer);

                    extractedChildren.push(createVNode(Item));
                    if (loopKey + 1 !== children.children?.length && spacer) {
                        extractedChildren.push(createVNode(spacerBox));
                    }
                });
            }

            return createVNode(
                'div',
                {
                    class: [
                        prefixCls,
                        `${prefixCls}-${direction}`,
                        align && `${prefixCls}-align-${align}`,
                    ],
                    style: {
                        gap: gapSize.value,
                    },
                },
                extractedChildren,
            );
        };
    },
});
