// eslint-disable-next-line @typescript-eslint/no-var-requires
const { run } = require('../tool/run.js');

exports.clean = async () => {
    Promise.all([run('rm -rf ./dist'), run('rm -rf ./docs/build')]);
};
