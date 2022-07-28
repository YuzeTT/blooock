import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    VitePWA({
      manifest: {
        name: 'Blooock 起始页',
        short_name: 'Blooock',
        display: 'standalone',
        theme_color: '#3b82f6',
        background_color: '#f1f2f6',
        description: '一个专为Minecraft玩家打造的起始页',
        icons: [
          {
            src: './icon.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './icon_512.svg',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
