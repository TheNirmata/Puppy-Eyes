module.exports = function(api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo',  { jsxRuntime: 'automatic' }]],
    plugins: [
      ['babel-plugin-inline-import', {
        extensions: ['.svg', '.png', '.jpg', '.jpeg', '.gif', '.ttf', '.otf']
      }],
      'react-native-reanimated/plugin'
     ]
  };
};
