const path = require('path');

module.exports = {
  // Define the entry point of your application:
  entry: './src/app.ts', // Make sure this points to the correct file

  // Define the rules for how to process different module types:
  module: {
    rules: [
      {
        // Process any files ending in .ts or .tsx with ts-loader:
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // Configure how modules are resolved:
  resolve: {
    // Automatically resolve these extensions when importing modules:
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Define where and how to output your compiled bundle:
  output: {
    filename: 'bundle.js', // The name of the output bundle
    path: path.resolve(__dirname, 'public'), // Where to place the output bundle
  },

  // Enable source maps for debugging:
  devtool: 'source-map', // Optional, but recommended for debugging purposes
};
