const path = require('path');

module.exports.manifestOptions = {
    filename: 'static/manifest.json',
    name: 'Medlife-Customer-App',
    short_name: 'Medlife',
    description: 'Medlife Customer APP',
    background_color: '#ffffff',
    theme_color: '#ff7300',
    display: 'standalone',
    orientation: 'portrait',
    fingerprints: false,
    inject: false,
    start_url: '/',
    ios: {
        'apple-mobile-web-app-title': 'Medlife',
        'apple-mobile-web-app-status-bar-style': '#ff7300',
    },
    icons: [
        {
            src: path.resolve('static/favicon.ico'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: '/static',
        },
    ],
    includeDirectory: true,
    publicPath: '..',
};
