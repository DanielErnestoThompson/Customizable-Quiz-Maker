const path = require('path');

module.exports = {
  entry: './src/app.ts', // Your entry point file
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', // Your output bundle file
    path: path.resolve(__dirname, 'public'), // Output directory
  },
};
