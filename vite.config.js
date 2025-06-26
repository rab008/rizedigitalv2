import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration for Rize Digital website
 * Configured for GitHub Pages deployment
 */
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages deployment
  // Change 'rizedigitalv2' to your GitHub repository name
  base: '/',
  // Build configuration
  build: {
    outDir: 'dist',
    // Generate a 404.html file for GitHub Pages SPA routing
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
