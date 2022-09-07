import { withInstall, withNoopInstall } from '@nuna-ui/utils/with-install';
import Collapse from './src/collapse.vue';
import CollapseItem from './src/collapse-item.vue';

export const NCollapse = withInstall(Collapse, { CollapseItem });

export default NCollapse;

export const NCollapseItem = withNoopInstall(CollapseItem);

export * from './src/collapse.vue';
export * from './src/collapse-item.vue';
