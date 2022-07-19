module.exports = { 
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime'],
                },
              },
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            // {
            //   test: /\.s[ac]ss$/i,
            //   exclude: /node_modules/,
            //   use: [
            //     // Creates `style` nodes from JS strings
            //     "style-loader",
            //     // Translates CSS into CommonJS
            //     "css-loader!postcss-loader",
            //     // Compiles Sass to CSS
            //     "sass-loader",
            //   ],
            // },
            // {
            //   test: /\.(css|sass|scss)$/,
            //   use: [
            //     {
            //       loader: 'style-loader'
            //     },
            //     {
            //       loader: 'css-loader'
            //     },
            //     {
            //       loader: 'sass-loader'
            //     }
            //   ]
            // },
            // {
            //   test: /\.(scss)$/,
            //   use: [
            //     {
            //       // Adds CSS to the DOM by injecting a `<style>` tag
            //       loader: 'style-loader'
            //     },
            //     {
            //       // Interprets `@import` and `url()` like `import/require()` and will resolve them
            //       loader: 'css-loader'
            //     },
            //     {
            //       // Loader for webpack to process CSS with PostCSS
            //       loader: 'postcss-loader',
            //       options: {
            //         plugins: function () {
            //           return [
            //             require('autoprefixer')
            //           ];
            //         }
            //       }
            //     },
            //     {
            //       // Loads a SASS/SCSS file and compiles it to CSS
            //       loader: 'sass-loader'
            //     },
            //   ]
            // },
            // {
            //   // Load all images as base64 encoding if they are smaller than 8192 bytes
            //   test: /\.(png|jpg|jpeg|gif|ico)$/,
            //   use: [
            //     {
            //       // loader: 'url-loader',
            //       loader: 'url-loader',
            //       options: {
            //         // On development we want to see where the file is coming from, hence we preserve the [path]
            //         name: '[path][name].[ext]?hash=[hash:20]',
            //         limit: 8192
            //       },
            //     },
            //     {
            //       loader: "resolve-url-loader",
            //       options: {
            //         sourceMap: true,
            //         join: (uri, base) => path.join('', base, uri)
            //       }
            //     },
            //   ],
            // },
            // {
            //   test: /\.(png|jpe?g|gif|ico)$/i,
            //   loader: 'file-loader',
            //   options: {
            //     name(resourcePath, resourceQuery) {
            //       // `resourcePath` - `/absolute/path/to/file.js`
            //       // `resourceQuery` - `?foo=bar`
      
            //       if (process.env.NODE_ENV === 'development') {
            //         return '[path][name].[ext]';
            //       }
      
            //       return '[contenthash].[ext]';
            //     },
            //   },
            // },
            {
              test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
              loader: 'file-loader'
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    //name: '[path][name].[ext]',
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            },
          ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss', '.eot', '.ttf', '.svg', '.woff'],
      modules: ['node_modules', 'scripts', 'images', 'fonts'],
      alias: {
        mdbReactUiKit: 'mdb-react-ui-kit'
      },
    },
};