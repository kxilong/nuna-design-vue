import { series } from 'gulp';
import { rollup, OutputOptions } from 'rollup';
import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { buildConfig } from '../build-info';
import { compOutput } from '@chili-ui/internal/src';
import { sync } from 'fast-glob'; // 同步查找文件
import typescript from 'rollup-plugin-typescript2';
import { pathRewriter } from '../utils/gulp';

async function buildFullEntry() {
  // 打包每个组件
  // 查找components下所有的组件目录 ["icon"]
  const files = sync('*', {
    cwd: compOutput,
    onlyDirectories: true, // 只查找文件夹
  });
  // 分别把components文件夹下的组件，放到dist/es/components下 和 dist/lib/components
  const builds = files.map(async (file: string) => {
    // 找到每个组件的入口文件 index.ts
    const input = path.resolve(compOutput, file, 'index.ts');
    console.log('***********', input);

    const config = {
      input,
      plugins: [nodeResolve(), typescript(), vue(), commonjs()],
      external: id => {
        return /^vue/.test(id) || /^@chili/.test(id);
      }, // 排除掉vue和@w-plus的依赖
    };

    const bundle = await rollup(config);
    const options = Object.values(buildConfig).map(config => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), // @w-plus => w-plus/es w-plus/lib  处理路径
      exports: 'named',
    }));

    await Promise.all(options.map(option => bundle.write(option as OutputOptions)));
  });

  return Promise.all(builds);
}

async function buildComponentEntry() {
  const config = {
    input: path.resolve(compOutput, 'index.ts'),
    plugins: [typescript()],
    external: () => true,
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map(config => ({
        format: config.format,
        file: path.resolve(config.output.path, 'components/index.js'),
      }))
      .map(config => bundle.write(config as OutputOptions)),
  );
}

export const buildModules = series(buildFullEntry, buildComponentEntry);
