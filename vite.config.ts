import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteRawPlugin from 'vite-raw-plugin';
import { VitePWA } from 'vite-plugin-pwa';
// Como __dirname no existe en ESModules, usamos esto:
const srcPath = path.resolve('src');

export default defineConfig({
    plugins: [
        react(),
        viteRawPlugin({
            fileRegex: /\.csv$/,
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt'],
            manifest: {
                name: 'Cabaña El Hinojo de Bru',
                short_name: 'El Hinojo de Bru',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#004d40',
                icons: [
                    {
                        src: 'icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': srcPath,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/variables" as *;`,
            },
        },
    },
});
