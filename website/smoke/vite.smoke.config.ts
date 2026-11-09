import { defineConfig } from "vite"
import solid from "solid-start/vite"

// Builds a client bundle of the full app so it can be mounted inside jsdom and
// clicked through without a browser. Not used by the website build.
export default defineConfig({
  plugins: [solid({ ssr: false })],
  build: {
    outDir: "smoke/dist",
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: "smoke/mount.tsx",
      formats: ["es"],
      fileName: () => "app.js",
    },
    rollupOptions: {
      // bundle every dependency so the output can run straight from /tmp
      external: [],
      output: { inlineDynamicImports: true },
    },
  },
})
