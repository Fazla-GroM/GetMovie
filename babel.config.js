module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          controllers: './src/controllers',
          config: './src/config',
          helpers: './src/helpers',
          hooks: './src/hooks',
          i18n: './src/i18n',
          models: './src/models',
          reducers: './src/reducers',
          screens: './src/screens',
          services: './src/services',
          navigation: './src/navigation',
          store: './src/store',
          styles: './src/styles',
          consts: './src/consts.js',
        },
      },
    ],
  ],
};
