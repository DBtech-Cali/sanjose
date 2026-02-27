import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // necesario para que Tailwind aplique todos los estilos
  ],
  // En Vercel (y en la mayoría de hostings) la app vive en la raíz,
  // por eso el base debe ser '/' para que carguen bien los assets.
  // Solo deberías usar algo como '/sanjose/' si publicas en GitHub Pages.
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {},
  },
});
