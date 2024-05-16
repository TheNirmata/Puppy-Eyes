module.exports = function(api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo',  { jsxRuntime: 'automatic' }]],
    plugins: [
      ["module:react-native-dotenv"],
      ['babel-plugin-inline-import', {
        extensions: ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.ttf', '.otf', '.jsx', '.tsx', '.js', '.ts']
      }],
      'react-native-reanimated/plugin'
     ]
  };
};
