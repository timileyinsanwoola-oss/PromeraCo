import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Full site origin for Open Graph / Twitter cards (crawlers require absolute image URLs). */
function htmlOgSiteUrl(): Plugin {
  return {
    name: "html-og-site-url",
    transformIndexHtml(html) {
      const origin =
        process.env.VITE_SITE_URL?.replace(/\/$/, "") ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
        "https://promeraco.vercel.app";
      return html.replaceAll("__OG_SITE_ORIGIN__", origin);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: __dirname,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [htmlOgSiteUrl(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
