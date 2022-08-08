import { resolve } from 'path';

export const projRoot = resolve(__dirname, '..', '..', '..');

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist');
/** `/dist/chili-ui` */
export const epOutput = resolve(buildOutput, 'chili-ui');
