// Static build config for GitHub Pages.
//
// Separate from vite.config.ts so the normal dev server and the default Lovable
// build are never affected. Build with:
//   VITE_BASE=/<repo>/ npm run build:pages
//
// The app has no backend (the booking form is front-end only), so we ship it as
// a client-rendered SPA: TanStack Start's SPA mode emits a static index.html
// shell plus the client bundle — no Node server required, ideal for Pages.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// A GitHub *project* page is served from /<repo>/, so assets need that prefix.
// The deploy workflow sets VITE_BASE automatically. For a user/org site
// (username.github.io) leave it as "/".
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  tanstackStart: {
    // Render a static SPA shell (index.html) that boots the app on the client.
    spa: { enabled: true },
  },
  vite: { base },
});
