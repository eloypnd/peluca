const path = require('path')
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  // Add 'src' to resolve modules
  // to avoid relative paths when importing modules.
  //
  // For example:
  //     import logotype from 'assets/logotype.svg'
  // instead of
  //     import logotype from '../assets/logotype.svg'
  config.resolve.modules.push(path.resolve(__dirname, '../src'))

  return config
}
