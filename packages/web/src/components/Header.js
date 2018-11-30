import React from 'react';
import Head from 'next/head';

export default function Header() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content="Medlife Customer App" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#302ecd" />
            <title>Medlife Web App</title>
            <link rel="manifest" href="/_next/static/manifest.json" />
            <link rel="icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
    );
}
