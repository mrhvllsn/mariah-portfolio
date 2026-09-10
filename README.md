# Developer Portfolio

Modern single-page developer portfolio using Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion and React Icons.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

Edit `data/portfolio.ts` for your name, bio, links, skills, projects and experience.

Replace `public/me1.png` with your profile image.

The HangingIDCard is implemented as an interactive client component with drag/swing momentum, wobble, idle movement and a 360° flip. If you have an original HangingIDCard implementation, replace/adapt only that component to preserve its exact physics.

## Structure

- `app/page.tsx` — one long scrollable page
- `components/` — separate section components
- `data/portfolio.ts` — editable portfolio data
- `public/` — images/assets
