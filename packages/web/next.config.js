/* eslint no-param-reassign: 0 */
/* eslint global-require: 0 */

const withCSS = require('@zeit/next-css');
const dotenv = require('dotenv');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxOptions = require('./webpack_options/workboxOptions');
const manifestOptions = require('./webpack_options/manifestOptions');

module.exports = withCSS({
    useFileSystemPublicRoutes: false,
    webpack(config, {
        isServer,
        buildId,
        dev,
    }) {
        // for fixing issue https://github.com/zeit/next.js/issues/2734
        config.node = {
            fs: 'empty',
        };


        dotenv.config();

        if (process.env.ANALYZE === 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: process.env.ANALYZER_PORT || 8888,
                openAnalyzer: true,
            }));
        }

        if (!isServer) {
            config.module.rules.find(({ test }) => test.test('style.css')).use.push({
                loader: 'css-purify-webpack-loader',
                options: {
                    // https://github.com/omar-bz/css-purify-webpack-loader#purifycssoptions
                    // https://github.com/omar-bz/css-purify-webpack-loader/blob/master/index.js#L31
                    // https://github.com/purifycss/purifycss#properties-of-options-object
                    purifyCssOptions: {
                        minify: true,
                        info: true,
                        rejected: true,
                        whitelist: ['*slick*'],
                    },
                    includes: ['./pages/*.js', './src/components/**'],
                },
            });
        }

        const assetPrefix = '';
        const limit = 8192;
        config.module.rules.push({
            test: /\.(jpe?g|png|svg|gif|ico)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit,
                        fallback: 'file-loader',
                        publicPath: `${assetPrefix}/_next/static/images/`,
                        outputPath: `${isServer ? '../' : ''}static/images/`,
                        name: '[name]-[hash].[ext]',
                    },
                },
            ],
        });

        if (!isServer && !dev) {
            // add pwa support
            config.plugins.push(
                new NextWorkboxPlugin({
                    buildId,
                    ...workboxOptions,
                }),
                new WebpackPwaManifest(manifestOptions),
            );
        }


        return config;
    },
});
