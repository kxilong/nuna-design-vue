import { parallel, series } from 'gulp';
import { withTaskName, run, runTask } from '@chili-ui/internal/src';
import { genTypes } from './src/utils/gen-types';
import { buildOutput, epRoot } from '@chili-ui/internal/src';
import { copyFile } from 'fs/promises';
import path from 'path';

const copySourceCode = () => async () => {
  await run(`cp ${epRoot}/package.json ${buildOutput}/package.json`);
};

export const copyFullStyle = async () => {
  await copyFile(
    path.resolve(buildOutput, 'theme-chalk/index.css'),
    path.resolve(buildOutput, 'dist/index.css'),
  );
};

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildFullComponent'), // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    runTask('buildModules'),
  ),

  parallel(
    series(
      withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-chalk build')),
      copyFullStyle,
    ),
  ),
  parallel(genTypes, copySourceCode()),
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from './src/task';
