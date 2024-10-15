import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Séparation des modules en chunks plus petits
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Crée un chunk séparé pour chaque dépendance dans node_modules
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // Augmente la limite d'avertissement de taille des chunks à 2000 kB (ou plus selon vos besoins)
    chunkSizeWarningLimit: 2000,
  },
})
