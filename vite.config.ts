import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteRawPlugin from 'vite-raw-plugin';
// Como __dirname no existe en ESModules, usamos esto:
const srcPath = path.resolve('src');

export default defineConfig({
    plugins: [
        react(),
        viteRawPlugin({
            fileRegex: /\.csv$/,
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
