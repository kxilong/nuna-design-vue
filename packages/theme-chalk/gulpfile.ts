import { series, src, dest } from 'gulp';
import less from 'gulp-less';
import path from 'path';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import consola from 'consola';
import chalk from 'chalk';
import { epOutput } from '@chili-ui/internal/src';

const distFolder = path.resolve(__dirname, 'dist');
const distBundle = path.resolve(epOutput, 'theme-chalk');

function buildThemeChalk() {
  const noElPrefixFile = /(index|base|display)/;

  return src(path.resolve(__dirname, 'src/**/*.less'))
    .pipe(
      less({
        paths: [path.join(__dirname, 'less', 'includes')],
      }),
    )
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        );
      }),
    )
    .pipe(
      rename(path => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `ch-${path.basename}`;
        }
      }),
    )
    .pipe(dest(distFolder));
}

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle));
}

export const build = series(buildThemeChalk, copyThemeChalkBundle);

export default build;
