import { parallel, series } from 'gulp';
import {
  withTaskName,
  run,
  runTask,
  buildOutput,
  epPackage,
  projRoot,
} from '@chili-ui/internal/build/utils';
import { copyFile } from 'fs/promises';
import path from 'path';

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(buildOutput, 'package.json')),
    copyFile(path.resolve(projRoot, 'README.md'), path.resolve(buildOutput, 'README.md')),
  ]);

export const copyFullStyle = async () => {
  await copyFile(
    path.resolve(buildOutput, 'theme-chalk/index.css'),
    path.resolve(buildOutput, 'dist/index.css'),
  );
};

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildModules'),
    runTask('buildFullComponent'), // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    runTask('generateTypesDefinitions'),
  ),

  parallel(
    series(
      withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-chalk build')),
      copyFullStyle,
    ),
  ),
  parallel(copyFiles),
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from './build/task';
