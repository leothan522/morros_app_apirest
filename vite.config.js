import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: 'public/build',
        publicDir: 'public/build',
        // generate .vite/manifest.json in outDir
        manifest: true,
        rollupOptions: {
            // overwrite default .html entry
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
        },
    },
})