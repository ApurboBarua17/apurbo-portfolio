import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/apurbo-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-separator', '@radix-ui/react-dialog'],
          router: ['react-router-dom'],
          supabase: ['@supabase/supabase-js']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Keep images at root level to match our paths
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
            return '[name].[ext]';
          }
          // Other assets go in subdirectories
          return 'assets/[ext]/[name]-[hash].[ext]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 5173
  },
  // Ensure public assets are properly handled
  publicDir: 'public'
})