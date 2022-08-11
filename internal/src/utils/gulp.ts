import type { TaskFunction } from 'gulp';
import { run, buildRoot } from '@chili-ui/internal/src';

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });

export const runTask = (name: string) =>
  withTaskName(`${name}`, () => run(`pnpm run start ${name}`, buildRoot));

// 重写打包后的@w-plus 路径
export const pathRewriter = format => {
  return (id: string) => {
    id = id.replaceAll('@chili-ui', `chili-ui/${format}`);
    return id;
  };
};
