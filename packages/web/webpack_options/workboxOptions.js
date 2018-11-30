module.exports = {
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: ['.next/static/*', '.next/static/commons/*'],
    // use it to replace .next in the precached URLs
    modifyUrlPrefix: {
        '.next': '/_next',
    },
    runtimeCaching: [
        {
            urlPattern: '/',
            handler: 'networkFirst',
            options: {
                cacheName: 'html-cache',
            },
        },
        {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'image-cache',
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
    ],
};
