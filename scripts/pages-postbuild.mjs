// Post-build step for the GitHub Pages SPA build.
//
// TanStack Start's SPA mode writes the static shell as dist/client/_shell.html.
// GitHub Pages serves `index.html` for "/", so we copy the shell to index.html
// and to 404.html (the SPA fallback Pages serves for unknown paths, so client
// routing / deep links resolve). `.nojekyll` stops GitHub from running Jekyll,
// which would otherwise ignore files/folders beginning with an underscore.
import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = "dist/client";
const shell = join(dir, "_shell.html");

if (!existsSync(shell)) {
  console.error(`pages-postbuild: ${shell} not found — did the SPA build run?`);
  process.exit(1);
}

copyFileSync(shell, join(dir, "index.html"));
copyFileSync(shell, join(dir, "404.html"));
writeFileSync(join(dir, ".nojekyll"), "");

console.log("pages-postbuild: wrote index.html, 404.html and .nojekyll to dist/client");
