import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dashboard_App/', // Chemin de base pour le déploiement sur GitHub Pages
  build: {
    outDir: 'dist', // Répertoire de sortie pour les fichiers de construction
  },
  resolve: {
    alias: {
      // Alias pour résoudre les chemins absolus
      '@': resolve(__dirname, 'src'),
    },
  },
})
