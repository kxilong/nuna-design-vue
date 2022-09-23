import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: [{ find: '@nuna-ui', replacement: path.resolve(__dirname, '../packages') }],
    },
    server: {
        fs: {
          strict: false,
        },
    },
})