## Structure

```
project
├── public/                     # Static files (favicon, manifest.json)
│   ├── favicon.ico
│   ├── manifest.json
│   
├── index.html                  # Main HTML entry (root)
├── src/
│   ├── assets/
│   │   ├── images/             # Project images (banners, products, etc.)
│   │   ├── pdf/                # PDF files
│   │
│   ├── components/
│   │   ├── _shared/            # Shared UI components (Header, Footer, FlexBox, etc.)
│   │   │   ├── _partial/       # Smallest atomic UI parts with dynamic style (icons, badges, etc.)
│   │   ├── layout/             # Layout-related components (home, ...)
│   │
│   ├── config/                 # App configuration (axios, env, theme)
│   │   ├── axios.ts
│   │   ├── env.ts
│   │   ├── theme.ts
│   │
│   ├── data/                   # Static/fake data
│   │   ├── fake.data.ts
│   │   ├── index.ts
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useAsyncEffect.ts
│   │   ├── useCategories.ts
│   │   ├── ...
│   │
│   ├── pages/                  # Page components (HomePage, ...)
│   │   ├── HomePage.tsx
│   │   ├── index.ts
│   │
│   ├── services/               # API services
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── index.ts
│   │
│   ├── store/                  # Redux store and slices
│   │   ├── slices/
│   │   │   ├── productSlice.ts
│   │   ├── index.ts
│   │
│   ├── styles/                 # Global and modular styles (SCSS)
│   │   ├── global.scss         # Universal/global rules for the whole app (fonts, base, typography)
│   │   ├── index.scss          # Main SCSS entry, imports all partials
│   │   ├── _mixins.scss        # Reusable SCSS mixins (flex, media queries, etc.)
│   │   ├── _reset.scss         # CSS reset for cross-browser consistency
│   │   ├── _variables.scss     # SCSS variables (colors, spacing, etc.)
│   │
│   ├── types/                  # TypeScript types
│   │   ├── index.ts
│   │   ├── NavBarList.ts
│   │
│   ├── utils/                  # Utility functions
│   │   ├── index.ts
│   │   ├── validation.util.ts
│   │
│   ├── App.tsx                 # App component
│   ├── main.tsx                # Entry point
│   ├── vite-env.d.ts           # Vite environment types
├── .env
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── package.json
├── README.md
```