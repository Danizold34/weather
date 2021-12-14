const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`)

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
  ]

  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: filename('js'), // паттерны [name,contenthash]-->(filename) просто чтобы не путаться
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devServer: {
    port: 4200,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '', // для создание карт
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
    ],
  },
}
