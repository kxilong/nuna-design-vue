/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const consola = require('consola');

const entryDir = path.resolve(__dirname, '../../packages/components');
const outputDir = path.resolve(__dirname, '../../dist');

function generateIndexDts(buildDir) {
    const fileStr = `import { App } from 'vue';
  declare function install(app: App): void
  declare const _default: {
      install: typeof install;
      version: string;
  };
  export default _default;`;
    fse.outputFileSync(path.resolve(buildDir, 'index.d.ts'), fileStr, 'utf8');
}

exports.generateTypesDefinitions = () => {
    generateIndexDts(outputDir);

    const components = fs.readdirSync(entryDir).filter(name => {
        const componentDir = path.resolve(entryDir, name);
        const isDir = fs.lstatSync(componentDir).isDirectory();
        return isDir && fs.readdirSync(componentDir).includes('index.ts');
    });
    const srcDts = path.resolve(outputDir, 'index.d.ts');

    for (const name of components) {
        const destDts = path.resolve(outputDir, `${name}/index.d.ts`);
        fs.copyFile(srcDts, destDts, err => {
            if (err) {
                consola.error(`拷贝组件${name}的ts类型文件失败！`);
            }
        });
    }
};
