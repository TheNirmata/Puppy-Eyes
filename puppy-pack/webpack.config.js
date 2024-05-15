// const path = require('path');

// module.exports = {
//   entry: path.join(__dirname, 'index.web.js'),
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.web.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     alias: {
//       'react-native$': 'react-native-web',
//     },
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000,
//   },
// };

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize the config before returning it.
  // For example, to add TypeScript support:
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};