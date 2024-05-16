// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('expo/metro-config')
/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname, {

  // [Web-only]: Enables CSS support in Metro.

  // This is required to load CSS files in the application.
  isCSSEnabled: true,
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  }
  
})
module.exports = config



