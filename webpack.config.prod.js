import path from 'node:path';

import webpack from 'webpack';
const { CleanPlugin } = webpack;

export default {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: [
      {
        directory: path.join(process.cwd()),
      },
    ],
  },
  plugins: [new CleanPlugin()],
};
