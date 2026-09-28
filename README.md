# Branchwork Studio

The site for branchworkstudio.com. Astro, static, no client JS.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Adding a project

Drop a Markdown file in `src/content/projects/`. The frontmatter is validated by
`src/content.config.ts`:

- `branch` is the part of life the project grows out of (`src/data/branches.ts`),
  not its tech stack. Add a new key there when a project doesn't fit.
- `cover` is one image, or use `screens` for a row of phone screenshots.
- `order` sets the position on the home page. The first project is shown wide.
- `draft: true` hides it.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
`public/CNAME` pins the custom domain.
