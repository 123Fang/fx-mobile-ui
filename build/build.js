import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
// import Markdown from "vite-plugin-vue-markdown";
import Markdown from 'unplugin-vue-markdown/vite'

import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import replace from '@rollup/plugin-replace';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export default defineConfig({
  base: './',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownOptions: {
        typographer: false, // 关闭智能转换
      }
    }),
    vueJsx(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: true,
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
        VantResolver()
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
        VantResolver({
          importStyle: 'css',
        }),
      ],
    }),
    replace({
      preventAssignment: false,
      include: [/node_modules/],
      values: {
        'van': 'icsm',
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "../src"),
      "@style": path.resolve(dirname, "../style"),
      'ctf-ics-mobile-ui': path.resolve(dirname, "../packages/index.js"),
      "@locale": path.resolve(dirname, "../locale"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "../style/element-plus/index.scss" as *;',
      },
    },
  },
  build: {
    rollupOptions: {
    },
  },
  test: {
  }
});
