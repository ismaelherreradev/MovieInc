module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '*.ios.ts',
          '*.android.ts',
          '*.ts',
          '*.ios.tsx',
          '*.tsx',
          '*.android.tsx',
          '*.jsx',
          '*.js',
          '*.json',
        ],
        alias: {
          '@services': './src/core/*',
          '@navigation': './src/navigation',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@lib': './src/lib',
        },
      },
    ],
  ],
};
