import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple Vite config; no aliases needed because we localize UI components
export default defineConfig({
  plugins: [react()]
})
