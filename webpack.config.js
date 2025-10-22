import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const isProduction = process.env.NODE_ENV === 'production'

const envPrefix = 'VITE_'

const environmentVariables = Object.entries(process.env)
  .filter(([key]) => key.startsWith(envPrefix))
  .reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

environmentVariables.NODE_ENV = process.env.NODE_ENV ?? (isProduction ? 'production' : 'development')

export default {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  output: {
    filename: isProduction ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash][ext][query]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: '404.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(environmentVariables)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true
        }
      ]
    }),
    ...(isProduction
      ? [
          new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
          })
        ]
      : [])
  ],
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
    port: 5173,
    historyApiFallback: true,
    static: [
      {
        directory: path.resolve(__dirname, 'public')
      }
    ],
    hot: true
  }
}
