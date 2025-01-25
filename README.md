# Startup

This is a [Next.js](https://nextjs.org/) App Router project with TypeScript, Tailwind, CLSX, and Prettier.

### Features

- Autentication with [Auth.js](https://authjs.dev/getting-started/installation?framework=next-js)
- State management with [Zustand](https://github.com/pmndrs/zustand)
- Light, Dark, and System Theme toggle
- Prettier code formatting with [Tailwind plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- [CLSX](https://github.com/lukeed/clsx) for improved logic within `className`
- Next.js [optimized fonts](https://nextjs.org/learn/dashboard-app/optimizing-fonts-images)
- Dynamic theme-based favicon
- Route-based active navigation highlighting
- Dynamic footer copyright date
- Tooltip component
- OG Image Generation via [@vercel/og-image](https://vercel.com/docs/functions/og-image-generation/og-image-api#@vercel/og-reference)
- Dynamically-generated [sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

## Getting Started

1. Install dependencies

```bash
bun install
```

2. Create a `.env.local` file in the root of the project and add the following:

```bash
AUTH_GITHUB_ID=<GitHub Client ID>
AUTH_GITHUB_SECRET=<GitHub Client Secret>

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<Next Auth Secret>
```

2. Run the development server:

```bash
bun dev
```
