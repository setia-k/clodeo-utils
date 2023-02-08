module.exports = {
  entry: {
    main: './src/index.js',
    strings: './src/strings',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    library: '@clodeo/utils',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
