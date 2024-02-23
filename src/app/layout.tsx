import '@mantine/core/styles.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript, DirectionProvider, createTheme} from '@mantine/core';
// import {theme} from '@/theme';
import "./global.css"
import '@mantine/carousel/styles.css';

export const metadata = {
    title: 'Mantine Next.js template',
    description: 'I am using Mantine with Next.js!',
};

const theme = createTheme({

})


export default function RootLayout({children}: { children: any }) {
    return (
        <html dir="rtl" lang="en">
        <head>
            <ColorSchemeScript/>
            <link rel="shortcut icon" href="/favicon.svg"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <title>Rahdid|رهدید</title>
        </head>
        <body dir="rtl">
        <DirectionProvider initialDirection="rtl">
            <MantineProvider theme={theme}>{children}</MantineProvider>
        </DirectionProvider>
        </body>
        </html>
    );
}
