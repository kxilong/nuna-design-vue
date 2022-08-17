import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..', '..');
export const buildRoot = resolve(projRoot, 'internal', 'build');
export const pkgRoot = resolve(projRoot, 'packages');

export const compOutput = resolve(pkgRoot, 'components');
export const epRoot = resolve(pkgRoot, 'nuna-ui');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');

export const PKG_NAME = 'nuna-ui';

export const epPackage = resolve(epRoot, 'package.json');
