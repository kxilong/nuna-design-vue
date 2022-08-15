/**
 * 安装依赖 pnpm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-typescript2 rollup-plugin-vue -D -w
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 处理文件路径
import commonjs from '@rollup/plugin-commonjs'; // 将 CommonJS 模块转换为 ES6
import vue from '@vitejs/plugin-vue';
import { parallel } from 'gulp';
import path from 'path';
import { buildOutput, epRoot } from '@chili-ui/internal/build/utils';
import { rollup, OutputOptions } from 'rollup';
import { target } from '../build-info';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import vueJsx from '@vitejs/plugin-vue-jsx';
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild';
import type { Plugin } from 'rollup';

const buildFull = async () => {
  // rollup 打包的配置信息
  const plugins: Plugin[] = [
    DefineOptions(),
    vue({
      isProduction: true,
    }),
    vueJsx(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: true,
      target,
      loaders: {
        '.vue': 'ts',
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
      treeShaking: true,
      legalComments: 'eof',
    }),
    minifyPlugin({
      target,
      sourceMap: true,
    }),
  ];
  const config = {
    input: path.resolve(epRoot, 'index.ts'), // 打包入口
    plugins,
    external: id => /^vue/.test(id), // 打包的时候不打包vue代码
    treeshake: true,
  };

  // 组件库两种使用方式 import 导入组件库 在浏览器中使用script

  // esm umd

  const buildConfig = [
    {
      format: 'umd', // 打包的格式
      file: path.resolve(buildOutput, 'dist/index.full.js'),
      exports: 'named', // 导出的名字 用命名的方式导出 libaryTarget:"" name:""
      name: 'ChiliUI', // 全局变量名字
      globals: {
        // 表示使用的vue是全局的
        vue: 'Vue',
      },
    },
    {
      format: 'esm',
      file: path.resolve(buildOutput, 'dist/index.full.mjs'),
    },
  ];

  const bundle = await rollup(config);

  return Promise.all(
    buildConfig.map(option => {
      bundle.write(option as OutputOptions);
    }),
  );
};
// gulp适合流程控制和代码的转义  没有打包的功能
export const buildFullComponent = parallel(buildFull);
