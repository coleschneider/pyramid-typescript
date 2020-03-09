const path = require('path')
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
  appDirectory,
  entry: resolveApp('client/index.tsx'),
  build: resolveApp('dist'),
}


module.exports = paths