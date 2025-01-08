import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const baseUrl = 'http://deeppink-mule-517335.hostingersite.com/build'; // No /public here

export default defineConfig({
    base: baseUrl, // This should point to the build folder
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        proxy: {
            '/@vite': baseUrl, // Proxy the build folder correctly
        },
    },
});
