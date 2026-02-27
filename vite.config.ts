import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // necesario para que Tailwind aplique todos los estilos
  ],
  // Si vas a publicar en GitHub Pages, deja este base con el nombre del repo.
  // En desarrollo (`npm run dev`) no afecta cómo se ve la app.
  base: '/sanjose/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {},
  },
});
