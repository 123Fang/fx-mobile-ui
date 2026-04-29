// vite.config.js
import { defineConfig } from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Markdown from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/unplugin-vue-markdown/dist/vite.js";
import vueJsx from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { fileURLToPath } from "url";
import path from "path";
import AutoImport from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/unplugin-vue-components/dist/resolvers.js";
import { VantResolver } from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/unplugin-vue-components/dist/resolvers.js";
import replace from "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/node_modules/@rollup/plugin-replace/dist/es/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/INSOURCE/Desktop/ctf-ics-mobile-ui/vite.config.js";
var filename = fileURLToPath(__vite_injected_original_import_meta_url);
var dirname = path.dirname(filename);
var vite_config_default = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      markdownOptions: {
        typographer: false
        // 关闭智能转换
      }
    }),
    vueJsx(),
    // 针对测试用例中jsx的编译
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: true,
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [
        ElementPlusResolver(),
        VantResolver()
      ],
      // dts: '/auto-import.d.ts',
      eslintrc: {
        enabled: true
        // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
      }
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
        VantResolver({
          importStyle: "css"
        })
      ]
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
        "van": "icsm"
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
          vue: "Vue"
        }
      }
    },
    outDir: "./ctf-ics-mobile-ui-dist/dist",
    lib: {
      entry: "./packages/index.js",
      name: "ctf-ics-mobile-ui",
      fileName: "ctf-ics-mobile-ui"
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(dirname, "src"),
      "ctf-ics-mobile-ui": path.resolve(dirname, "packages/index.js"),
      "@style": path.resolve(dirname, "style"),
      "@locale": path.resolve(dirname, "locale")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@use "./src/styles/style.scss" as *;',
        additionalData: '@use "./style/element-plus/index.scss" as *;'
      }
    }
  },
  // vitest
  test: {
    clearMocks: true,
    setupFiles: ["./vitest.setup.js"],
    globals: true,
    include: ["./packages/**/__test__/*.jsx"],
    environment: "jsdom",
    // 必须
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    // 【关键步骤】强制 Vite 内联处理 Vant 库
    /**
     * TypeError: Unknown file extension ".css" for C:\Users\INSOURCE\Desktop\ctf-ics-mobile-ui\node_modules\vant\es\style\base.css
     * **/
    server: {
      deps: {
        inline: ["vant"]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJTlNPVVJDRVxcXFxEZXNrdG9wXFxcXGN0Zi1pY3MtbW9iaWxlLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJTlNPVVJDRVxcXFxEZXNrdG9wXFxcXGN0Zi1pY3MtbW9iaWxlLXVpXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9JTlNPVVJDRS9EZXNrdG9wL2N0Zi1pY3MtbW9iaWxlLXVpL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IFZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbi8vIGltcG9ydCBNYXJrZG93biBmcm9tIFwidml0ZS1wbHVnaW4tbWRcIjtcclxuLyoqXHJcbiAqIHZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93biBcdTc2ODRcdTk1RUVcdTk4OThcdUZGMUFcclxuICogXHU2NTg3XHU2ODYzbWRcdTY1ODdcdTRFRjZcdTRFMkRcdUZGMUEgIC0tIFx1ODhBQlx1NkUzMlx1NjdEM1x1NjIxMCAgXHUyMDEzIFx1RkYwQ1x1NzgzNFx1NTc0RiBDU1MgXHU1M0Q4XHU5MUNGXHU1NDBELlxyXG4gKiBcdThGRDlcdTY2MkZcdTU2RTBcdTRFM0EgTWFya2Rvd24gXHU2RTMyXHU2N0QzXHU1NjY4XHU1RjAwXHU1NDJGXHU0RTg2IHR5cG9ncmFwaGVyIFx1NTI5Rlx1ODBGRFx1RkYwOFx1NjY3QVx1ODBGRFx1NjM5Mlx1NzI0OFx1RkYwOVx1RkYwQ1x1NUMwNiAtLSBcdTY2RkZcdTYzNjJcdTRFM0EgXHUyMDEzXHJcbiAqIFx1NzUyOCB1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZSBcdTRFRTNcdTY2RkYsXHU1M0VGXHU3NTI4XHU5MTREXHU3RjZFXHU1MTczXHU5NUVEIHR5cG9ncmFwaGVyXHVGRjA4XHU2NjdBXHU4MEZEXHU2MzkyXHU3MjQ4XHVGRjA5XHJcbiAqICoqL1xyXG4vLyBpbXBvcnQgTWFya2Rvd24gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blwiO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndW5wbHVnaW4tdnVlLW1hcmtkb3duL3ZpdGUnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuLy8gaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZydcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8vLy8vL1x1NjVCMFx1NTg5RVx1OTE0RFx1N0Y2RS8vLy8vLy8vL1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5cclxuLy8vLy8vLy9cdTY1QjBcdTU4OUVcdTkxNERcdTdGNkUvLy8vLy8vL1xyXG5pbXBvcnQgcmVwbGFjZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1yZXBsYWNlJztcclxuXHJcblxyXG5jb25zdCBmaWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgZGlybmFtZSA9IHBhdGguZGlybmFtZShmaWxlbmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZ1ZSh7XHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcclxuICAgIH0pLFxyXG4gICAgTWFya2Rvd24oe1xyXG4gICAgICBtYXJrZG93bk9wdGlvbnM6IHtcclxuICAgICAgICB0eXBvZ3JhcGhlcjogZmFsc2UsIC8vIFx1NTE3M1x1OTVFRFx1NjY3QVx1ODBGRFx1OEY2Q1x1NjM2MlxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIHZ1ZUpzeCgpLCAvLyBcdTk0ODhcdTVCRjlcdTZENEJcdThCRDVcdTc1MjhcdTRGOEJcdTRFMkRqc3hcdTc2ODRcdTdGMTZcdThCRDFcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbmNsdWRlOiBbL1xcLlt0al1zeD8kLywgL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlL10sXHJcbiAgICAgIGR0czogdHJ1ZSxcclxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXHJcbiAgICAgICAgVmFudFJlc29sdmVyKClcclxuICAgICAgXSxcclxuICAgICAgLy8gZHRzOiAnL2F1dG8taW1wb3J0LmQudHMnLFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIDFcdTMwMDFcdTY1MzlcdTRFM0F0cnVlXHU3NTI4XHU0RThFXHU3NTFGXHU2MjEwZXNsaW50XHU5MTREXHU3RjZFXHUzMDAyMlx1MzAwMVx1NzUxRlx1NjIxMFx1NTQwRVx1NjUzOVx1NTZERWZhbHNlXHVGRjBDXHU5MDdGXHU1MTREXHU5MUNEXHU1OTBEXHU3NTFGXHU2MjEwXHU2RDg4XHU4MDE3XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtcclxuICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVmFudFJlc29sdmVyKHtcclxuICAgICAgICAgIGltcG9ydFN0eWxlOiAnY3NzJyxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgLyoqXHJcbiAgICAgKiByZXBsYWNlXHU2M0QyXHU0RUY2XHJcbiAgICAgKiB0cmFuc2Zvcm1cdUZGMUFcdTU5MDRcdTc0MDZcdTZCQ0ZcdTRFMkFcdTZBMjFcdTU3NTdcdTc2ODRcdTZFOTBcdTRFRTNcdTc4MDFcclxuICAgICAqIHJlbmRlckNodW5rXHVGRjFBXHU1OTA0XHU3NDA2XHU2NzAwXHU3RUM4XHU3NTFGXHU2MjEwXHU3Njg0XHU1NzU3XHVGRjA4XHU1OTgyIGNodW5rXHVGRjA5XHVGRjBDXHU3NTI4XHU0RThFXHU1NzI4XHU2MjUzXHU1MzA1XHU1NDBFXHU1MThEXHU2QjIxXHU2NkZGXHU2MzYyXHUzMDAyXHJcbiAgICAgKiBcdTRFMjRcdTgwMDVcdTU3NDdcdTkwMUFcdThGQzcgZmlsdGVyKGlkKSBcdTUxQjNcdTVCOUFcdTY2MkZcdTU0MjZcdTU5MDRcdTc0MDZcdThCRTVcdTY1ODdcdTRFRjZcdTMwMDJcclxuICAgICAqICoqL1xyXG4gICAgcmVwbGFjZSh7XHJcbiAgICAgIHByZXZlbnRBc3NpZ25tZW50OiBmYWxzZSxcclxuICAgICAgaW5jbHVkZTogWy9ub2RlX21vZHVsZXMvXSxcclxuICAgICAgLy8gZGVsaW1pdGVyczogWycnLCAnJ10sXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgICd2YW4nOiAnaWNzbScsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBcdTU5MTZcdTkwRThcdTUzMTZcdTkwQTNcdTRFOUJcdTVFOTNcdTRFMkRcdTRFMERcdTk3MDBcdTg5ODFcdTc2ODRcdTRGOURcdThENTZcclxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiLCBcInBpbmlhXCIsIFwic2Fzc1wiLCBcInZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJAdml0ZWpzL3BsdWdpbi12dWVcIiwgXCJ2aXRlXCIsIFwiaGlnaGxpZ2h0LmpzXCJdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG91dERpcjogJy4vY3RmLWljcy1tb2JpbGUtdWktZGlzdC9kaXN0JyxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogXCIuL3BhY2thZ2VzL2luZGV4LmpzXCIsXHJcbiAgICAgIG5hbWU6IFwiY3RmLWljcy1tb2JpbGUtdWlcIixcclxuICAgICAgZmlsZU5hbWU6ICdjdGYtaWNzLW1vYmlsZS11aScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShkaXJuYW1lLCBcInNyY1wiKSxcclxuICAgICAgJ2N0Zi1pY3MtbW9iaWxlLXVpJzogcGF0aC5yZXNvbHZlKGRpcm5hbWUsIFwicGFja2FnZXMvaW5kZXguanNcIiksXHJcbiAgICAgIFwiQHN0eWxlXCI6IHBhdGgucmVzb2x2ZShkaXJuYW1lLCBcInN0eWxlXCIpLFxyXG4gICAgICBcIkBsb2NhbGVcIjogcGF0aC5yZXNvbHZlKGRpcm5hbWUsIFwibG9jYWxlXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgLy8gYWRkaXRpb25hbERhdGE6ICdAdXNlIFwiLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIiBhcyAqOycsXHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAdXNlIFwiLi9zdHlsZS9lbGVtZW50LXBsdXMvaW5kZXguc2Nzc1wiIGFzICo7JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2aXRlc3RcclxuICB0ZXN0OiB7XHJcbiAgICBjbGVhck1vY2tzOiB0cnVlLFxyXG4gICAgc2V0dXBGaWxlczogWycuL3ZpdGVzdC5zZXR1cC5qcyddLFxyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGluY2x1ZGU6IFsnLi9wYWNrYWdlcy8qKi9fX3Rlc3RfXy8qLmpzeCddLFxyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsICAgLy8gXHU1RkM1XHU5ODdCXHJcbiAgICB0cmFuc2Zvcm1Nb2RlOiB7XHJcbiAgICAgIHdlYjogWy9cXC5banRdc3gkL10sXHJcbiAgICB9LFxyXG4gICAgLy8gXHUzMDEwXHU1MTczXHU5NTJFXHU2QjY1XHU5QUE0XHUzMDExXHU1RjNBXHU1MjM2IFZpdGUgXHU1MTg1XHU4MDU0XHU1OTA0XHU3NDA2IFZhbnQgXHU1RTkzXHJcbiAgICAvKipcclxuICAgICAqIFR5cGVFcnJvcjogVW5rbm93biBmaWxlIGV4dGVuc2lvbiBcIi5jc3NcIiBmb3IgQzpcXFVzZXJzXFxJTlNPVVJDRVxcRGVza3RvcFxcY3RmLWljcy1tb2JpbGUtdWlcXG5vZGVfbW9kdWxlc1xcdmFudFxcZXNcXHN0eWxlXFxiYXNlLmNzc1xyXG4gICAgICogKiovXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgZGVwczoge1xyXG4gICAgICAgIGlubGluZTogWyd2YW50J10sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVMsb0JBQW9CO0FBQzFWLE9BQU8sU0FBUztBQVNoQixPQUFPLGNBQWM7QUFDckIsT0FBTyxZQUFZO0FBRW5CLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUdqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLG9CQUFvQjtBQUc3QixPQUFPLGFBQWE7QUF2Qm1MLElBQU0sMkNBQTJDO0FBMEJ4UCxJQUFNLFdBQVcsY0FBYyx3Q0FBZTtBQUM5QyxJQUFNLFVBQVUsS0FBSyxRQUFRLFFBQVE7QUFFckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLElBQzdCLENBQUM7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNQLGlCQUFpQjtBQUFBLFFBQ2YsYUFBYTtBQUFBO0FBQUEsTUFDZjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsY0FBYyxVQUFVLFlBQVk7QUFBQSxNQUM5QyxLQUFLO0FBQUEsTUFDTCxTQUFTLENBQUMsT0FBTyxjQUFjLE9BQU87QUFBQSxNQUN0QyxXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxRQUNwQixhQUFhO0FBQUEsTUFDZjtBQUFBO0FBQUEsTUFFQSxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUE7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxVQUNsQixhQUFhO0FBQUEsUUFDZixDQUFDO0FBQUEsUUFDRCxhQUFhO0FBQUEsVUFDWCxhQUFhO0FBQUEsUUFDZixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT0QsUUFBUTtBQUFBLE1BQ04sbUJBQW1CO0FBQUEsTUFDbkIsU0FBUyxDQUFDLGNBQWM7QUFBQTtBQUFBLE1BRXhCLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsT0FBTyxTQUFTLFFBQVEsNEJBQTRCLGNBQWMsc0JBQXNCLFFBQVEsY0FBYztBQUFBLE1BQ3pILFFBQVE7QUFBQTtBQUFBLFFBRU4sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxTQUFTLEtBQUs7QUFBQSxNQUNoQyxxQkFBcUIsS0FBSyxRQUFRLFNBQVMsbUJBQW1CO0FBQUEsTUFDOUQsVUFBVSxLQUFLLFFBQVEsU0FBUyxPQUFPO0FBQUEsTUFDdkMsV0FBVyxLQUFLLFFBQVEsU0FBUyxRQUFRO0FBQUEsSUFDM0M7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLFNBQVM7QUFBQSxJQUNULFNBQVMsQ0FBQyw4QkFBOEI7QUFBQSxJQUN4QyxhQUFhO0FBQUE7QUFBQSxJQUNiLGVBQWU7QUFBQSxNQUNiLEtBQUssQ0FBQyxXQUFXO0FBQUEsSUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLFFBQ0osUUFBUSxDQUFDLE1BQU07QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUVGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
