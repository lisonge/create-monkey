import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.jsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www.google.com/'],
      },
      build: {
        externalGlobals: {
          react: [
            'React',
            (version) =>
              `https://cdn.jsdelivr.net/npm/react@${version}/umd/react.production.min.js`,
          ],
          'react-dom': [
            'ReactDOM',
            (version) =>
              `https://cdn.jsdelivr.net/npm/react-dom@${version}/umd/react-dom.production.min.js`,
          ],
        },
      },
    }),
  ],
});
