// @ts-check

/**
 * @param {import('@docusaurus/types').PluginConfig} context
 * @returns {import('webpack').Configuration}
 */
module.exports = function (context) {
  return {
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
                plugins: [
                  ['@babel/plugin-transform-modules-commonjs', { allowTopLevelThis: true }]
                ],
              },
            },
          ],
        },
      ],
    },
  };
};