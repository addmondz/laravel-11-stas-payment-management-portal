import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const baseUrl = process.env.VITE_BASE_URL_PUBLIC;
console.log(process.env.VITE_BASE_URL_PUBLIC);

export default defineConfig({
    base: baseUrl,
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
            '/@vite': baseUrl + '/build',
        },
    },
});
