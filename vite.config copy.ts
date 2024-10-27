import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'add-lib',
      fileName: 'index',
    },
    sourcemap: true,
    minify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
});
