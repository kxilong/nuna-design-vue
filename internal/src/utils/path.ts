import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..', '..');
export const buildRoot = resolve(projRoot, 'internal', 'src');
export const pkgRoot = resolve(projRoot, 'packages');

export const compOutput = resolve(pkgRoot, 'components');
export const wpRoot = resolve(pkgRoot, 'chili-ui');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');
/** `/dist/chili-ui` */
export const epOutput = resolve(buildOutput, 'chili-ui');

export const PKG_NAME = 'chili-ui';
