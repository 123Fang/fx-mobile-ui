import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
// import Markdown from "vite-plugin-md";
/**
 * vite-plugin-vue-markdown 的问题：
 * 文档md文件中：  -- 被渲染成  – ，破坏 CSS 变量名.
 * 这是因为 Markdown 渲染器开启了 typographer 功能（智能排版），将 -- 替换为 –
 * 用 unplugin-vue-markdown/vite 代替,可用配置关闭 typographer（智能排版）
 * **/
// import Markdown from "vite-plugin-vue-markdown";
import Markdown from 'unplugin-vue-markdown/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'url';
import path from 'path';

///////新增配置/////////
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from 'unplugin-vue-components/resolvers';

////////新增配置////////
import replace from '@rollup/plugin-replace';


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownOptions: {
        typographer: false, // 关闭智能转换
      }
    }),
    vueJsx(), // 针对测试用例中jsx的编译
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: true,
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [
        ElementPlusResolver(),
        VantResolver()
      ],
      // dts: '/auto-import.d.ts',
      eslintrc: {
        enabled: true, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
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
    /**
     * replace插件
     * transform：处理每个模块的源代码
     * renderChunk：处理最终生成的块（如 chunk），用于在打包后再次替换。
     * 两者均通过 filter(id) 决定是否处理该文件。
     * **/
    replace({
      preventAssignment: false,
      include: [/node_modules/],
      // delimiters: ['', ''],
      values: {
        // 'van': 'icsm',
         'van': 'fx',
      }
    })
  ],
  build: {
    rollupOptions: {
      // 外部化那些库中不需要的依赖
      external: ["vue", "pinia", "sass", "vite-plugin-vue-markdown", "vue-router", "@vitejs/plugin-vue", "vite", "highlight.js"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: './ctf-ics-mobile-ui-dist/dist',
    lib: {
      entry: "./packages/index.js",
      name: "ctf-ics-mobile-ui",
      fileName: 'ctf-ics-mobile-ui',
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
      // 'ctf-ics-mobile-ui': path.resolve(dirname, "packages/index.js"),
      'fx-mobile-ui': path.resolve(dirname, "packages/index.js"),
      "@style": path.resolve(dirname, "style"),
      "@locale": path.resolve(dirname, "locale"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "./src/styles/style.scss" as *;',
        additionalData: '@use "./style/element-plus/index.scss" as *;',
      },
    },
  },
  // vitest
  test: {
    clearMocks: true,
    setupFiles: ['./vitest.setup.js'],
    globals: true,
    include: ['./packages/**/__test__/*.jsx'],
    environment: 'jsdom',   // 必须
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    // 【关键步骤】强制 Vite 内联处理 Vant 库
    /**
     * TypeError: Unknown file extension ".css" for C:\Users\INSOURCE\Desktop\ctf-ics-mobile-ui\node_modules\vant\es\style\base.css
     * **/
    server: {
      deps: {
        inline: ['vant'],
      },
    },

  }
});
