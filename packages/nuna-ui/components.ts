/**
 * @author        lison <740394554@qq.com>
 * @date          2022-08-15 14:49:25
 * Copyright © YourCompanyName All rights reserved
 */
import SpinInstall, { NSpin } from '@nuna-ui/components/spin';
import ButtonInstall, { NButton } from '@nuna-ui/components/button';
import AvatarInstall, { NAvatar } from '@nuna-ui/components/avatar';
import BadgeInstall, { NBadge } from '@nuna-ui/components/badge';
import SpaceInstall, { NSpace } from '@nuna-ui/components/space';
import DividerInstall, { NDivider } from '@nuna-ui/components/divider';
import EmptyInstall, { NEmpty } from '@nuna-ui/components/empty';
import AlertInstall, { NAlert } from '@nuna-ui/components/alert';
import InputInstall, { NInput } from '@nuna-ui/components/input';
import RowInstall, { NRow } from '@nuna-ui/components/row';
import ColInstall, { NCol } from '@nuna-ui/components/col';
import NCollapseInstall, { NCollapse, NCollapseItem } from '@nuna-ui/components/collapse';

const installs = [
    SpinInstall,
    ButtonInstall,
    AvatarInstall,
    SpaceInstall,
    BadgeInstall,
    DividerInstall,
    EmptyInstall,
    AlertInstall,
    InputInstall,
    RowInstall,
    ColInstall,
    NCollapseInstall,
];

export {
    NSpin,
    NButton,
    NAvatar,
    NBadge,
    NSpace,
    NDivider,
    NEmpty,
    NAlert,
    NInput,
    NRow,
    NCol,
    NCollapse,
    NCollapseItem,
};

export default {
    install(app): void {
        installs.forEach((p) => app.use(p));
    },
};