import { parallel, series } from 'gulp';
import { withTaskName, run } from '@chili-ui/internal/src';

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    series(withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-chalk build'))),
  ),
);
