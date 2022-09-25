/* eslint-disable @typescript-eslint/no-var-requires */
const { Command } = require('commander');
const { build } = require('./commands/build');
const { clean } = require('./commands/clean');
const program = new Command();

program.command('clean').description('清理文件夹').action(clean);

program.command('build').description('打包组件库').action(build);

program.parse().version('0.8.0');
