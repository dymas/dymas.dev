const webpack = require('webpack');

module.exports = {
  pwa: {
    name: 'Dymas',
    themeColor: '#17a2b8',
    msTileColor: '#17a2b8',
    appleMobileWebAppCapable: 'yes'
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.min',
        jQuery: 'jquery/dist/jquery.min',
        'window.jQuery': 'jquery/dist/jquery.min'
      })
    ]
  }
}
