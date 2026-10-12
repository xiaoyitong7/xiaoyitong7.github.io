# Personal Portfolio

A dark, static portfolio built with Astro 7 and Tailwind CSS 4. It includes a responsive homepage and three case studies sourced from the accompanying Figma portfolio.

## Run locally

```sh
pnpm install
pnpm dev
```

Use `pnpm check` for type checking and `pnpm build` to generate the production site in `dist/`.

## Replace placeholders

Personal information lives in `src/site.config.ts`. The homepage biography is in `src/pages/index.astro`, and each project is a Markdown file in `src/content/work/`.

## Credits

Based on the MIT-licensed [astro-starter-portfolio](https://github.com/BracoZS/astro-starter-portfolio) by BracoZS.
