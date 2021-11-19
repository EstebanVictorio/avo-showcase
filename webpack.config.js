const path = require('path')
const webpack = require('webpack')
const root = path.resolve('src')

/**
 * @type {import('webpack').Configuration} config
 */
const config = {
  resolve: {
    alias: {
      components: `${root}/components`,
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
}

module.exports = config