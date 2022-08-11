import { parallel, series } from 'gulp';
import { withTaskName, run, runTask } from '@chili-ui/internal/src';
import { genTypes } from './src/utils/gen-types';
import { buildOutput, wpRoot } from '@chili-ui/internal/src';

const copySourceCode = () => async () => {
  await run(`cp ${wpRoot}/package.json ${buildOutput}/package.json`);
};

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildFullComponent'), // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    runTask('buildModules'),
  ),

  parallel(
    series(withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-chalk build'))),
  ),
  parallel(genTypes, copySourceCode()),
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from './src/task/full-component';
export * from './src/task/modules';
