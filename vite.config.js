import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The isolated Three.js runtime is ~719 kB minified and ~189 kB gzipped.
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('/node_modules/three/')) return 'three-vendor'
          if (id.includes('/node_modules/@react-three/')) return 'react-three-vendor'
          if (id.includes('/node_modules/three-stdlib/')) return 'three-addons'
          if (id.includes('/node_modules/gsap/')) return 'animation-vendor'
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) return 'react-vendor'
          return undefined
        },
      },
    },
  },
})
