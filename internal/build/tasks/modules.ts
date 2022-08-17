import glob from 'fast-glob';
import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { buildConfigEntries, target } from '../build-info';
import { epRoot, pkgRoot } from '@nuna-ui/internal/build/utils';
import type { OutputOptions } from 'rollup';
import { writeBundles, excludeFiles } from '@nuna-ui/internal/build/utils';
import DefineOptions from 'unplugin-vue-define-options/rollup';
import vueJsx from '@vitejs/plugin-vue-jsx';
import esbuild from 'rollup-plugin-esbuild';

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    }),
  );
  const config = {
    input,
    plugins: [
      DefineOptions(),
      vue({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: id => /^vue/.test(id) || /^@nuna-ui/.test(id), // 排除掉vue和@chili-ui的依赖
    treeshake: false,
  };
  const bundle = await rollup(config);
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      };
    }),
  );
};
