/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const DefineOptions = require('unplugin-vue-define-options/vite');
const { copyFile } = require('fs/promises');

const projRoot = path.resolve(__dirname, '../../');
const entryDir = path.resolve(__dirname, '../../packages/components');
const allEntryDir = path.resolve(__dirname, '../../packages/nuna-ui');
const pkgJsonDir = path.resolve(__dirname, '../../packages/nuna-ui/package.json');
const outputDir = path.resolve(__dirname, '../../dist');

const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx(), DefineOptions()],
});

const rollupOptions = {
    external: ['vue', 'vue-router', '@vueuse/core', '@floating-ui/dom'],
    output: {
        globals: {
            vue: 'Vue',
        },
    },
};

const buildSingle = async name => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                rollupOptions,
                lib: {
                    entry: path.resolve(entryDir, name),
                    name: 'index',
                    fileName: 'index',
                    formats: ['es', 'umd'],
                },
                outDir: path.resolve(outputDir, name),
            },
        }),
    );
};

const buildAll = async () => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                rollupOptions,
                lib: {
                    entry: path.resolve(allEntryDir, 'components.ts'),
                    name: 'Nunaui',
                    fileName: 'index',
                    formats: ['es', 'umd'],
                },
                outDir: outputDir,
            },
        }),
    );
};

const copyFiles = () =>
    Promise.all([
        copyFile(pkgJsonDir, path.resolve(outputDir, 'package.json')),
        copyFile(path.resolve(projRoot, 'README.md'), path.resolve(outputDir, 'README.md')),
        copyFile(path.resolve(projRoot, 'LICENSE'), path.resolve(outputDir, 'LICENSE')),
    ]);

exports.build = async () => {
    await buildAll();

    const components = fs.readdirSync(entryDir).filter(name => {
        const componentDir = path.resolve(entryDir, name);
        const isDir = fs.lstatSync(componentDir).isDirectory();
        return isDir && fs.readdirSync(componentDir).includes('index.ts');
    });

    for (let comp of components) {
        await buildSingle(comp);
    }
    copyFiles();
};
