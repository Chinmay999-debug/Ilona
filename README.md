# Ilona Clinic

Marketing site for **Ilona Endocrine and Wellness Centre** — specialist
endocrinology and dermatology in Indiranagar, Bengaluru.

Built with TanStack Start + React + Tailwind CSS. The site has no backend (the
booking form is front-end only), so it ships as a static client-rendered SPA.

## Local development

```bash
npm install
npm run dev      # http://localhost:8080
```

## Build

```bash
npm run build         # default (Lovable / Cloudflare) build
npm run build:pages   # static build for GitHub Pages -> dist/client
```

## Deploy to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
every push to `main` builds the static site and publishes it. The workflow
figures out the correct base path automatically (works for both
`username.github.io/<repo>/` project sites and `username.github.io` user sites).

**One-time setup** (run these in your own terminal — the `git push` step asks you
to authenticate with GitHub):

1. Create a new **empty** repository on GitHub (no README/.gitignore).
2. Connect this project and push:

   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

   When prompted for a password, paste a **Personal Access Token**
   (GitHub → Settings → Developer settings → Personal access tokens → generate
   one with `repo` scope). macOS stores it in the keychain, so you only do this
   once.

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.

The site goes live at `https://<your-username>.github.io/<your-repo>/` once the
"Deploy to GitHub Pages" workflow finishes (Actions tab).
