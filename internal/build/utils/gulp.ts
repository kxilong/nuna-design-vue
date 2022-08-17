import type { TaskFunction } from 'gulp';
import { run, buildRoot } from '@nuna-ui/internal/build/utils';

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name });

export const runTask = (name: string) =>
  withTaskName(`${name}`, () => run(`pnpm run start ${name}`, buildRoot));

export const pathRewriter = format => {
  return (id: string) => {
    id = id.replaceAll('@nuna-ui', `nuna-ui/${format}`);
    return id;
  };
};
