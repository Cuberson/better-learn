import solid from "solid-start/vite"
import { defineConfig } from "vite"
import cloudflare from "solid-start-cloudflare-pages"
import node from "solid-start-node"

// note: cloudflare adapter breaks if you use node version 20, it has to be 18
// for local development on newer Node versions set `LA_ADAPTER=node` and the
// node adapter gets used instead (the site itself is identical, it is an SPA)
const useNodeAdapter = process.env.LA_ADAPTER === "node"

export default defineConfig({
  plugins: [
    solid({
      ssr: false,
      adapter: useNodeAdapter ? node({}) : cloudflare({}),
    }),
  ],
  // needed so the app can be opened through a proxied/preview host (and LAN ip)
  server: {
    host: true,
    allowedHosts: true,
  },
})
