import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
// import manifest from './manifest.json' // Node 14 & 16
import manifest from "./manifest.config"; // Node >=17
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // 多页面打包配置（其实可以不用，直接使用router实现页面跳转也行）
      input: {
        popup: resolve(__dirname, "index.html"),
        help: resolve(__dirname, "./src/pages/help/index.html")
      },
      output: {
        dir: "dist",
        format: "es"
      }
    }
  },
  plugins: [vue(), crx({ manifest })],
  // 根据启动服务的端口修改，否则 hmr 不生效
  server: {
    strictPort: true,
    port: 5174,
    hmr: {
      clientPort: 5174
    }
  }
});
