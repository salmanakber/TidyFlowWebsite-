import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Hosts that may hit this app (direct or via reverse proxy)
      allowedHosts: [
        'tidyflowapp.com',
        'www.tidyflowapp.com',
        'localhost',
        '.tidyflowapp.com',
      ],
      // On the live server, set DISABLE_HMR=true to avoid websocket/file-watch crashes
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});