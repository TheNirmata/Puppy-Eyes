const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native/Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});


module.exports = withExpo({
  // transpilePackages is a Next.js +13.1 feature.
  // older versions can use next-transpile-modules
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native/Expo packages here...
  ],
},
nextConfig
);
