import { defineConfig } from 'vite';
import dts from 'rollup-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'add-lib',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    sourcemap: true,
    minify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      plugins: [dts()],
      output: {
        // Ensure we generate the .d.ts file
        entryFileNames: '[name].[format].js',
        chunkFileNames: '[name]-[hash].[format].js',
      },
    },
  },
});
