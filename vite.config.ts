import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(( { command }) => ({
base: command === 'build' ? './' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'ZenList',
        short_name: 'ZenList',
        description: 'Productivity without the Noise. A privacy-first, local-only to-do app.',
        start_url: '/#/app',
        display: 'standalone',
        background_color: '#F9F9F9',
        theme_color: '#2F4F4F',
        icons: [
          {
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
      },
    }),
  ],
  server: {
    host: true,
  },
})
