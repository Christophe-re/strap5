import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "react-beautiful-timeline",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    // {
    //   name: "copy-tailwind-config",
    //   writeBundle() {
    //     copyFileSync("tailwind.config.js", "dist/tailwind.config.js");
    //   },
    // },
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
