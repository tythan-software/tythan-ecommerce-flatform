client/
├── app/                  # Routing and layouts live here
│   ├── layout.tsx         # Shared layout (header, footer, etc.)
│   ├── page.tsx           # '/' route (home page)
│   ├── about/
│   │   └── page.tsx       # '/about' route
│   └── api/
│       └── route.ts      # '/api' endpoint
├── public/               # Static assets
│   └── logo.png
│   └── favicon.ico
├── components/           # Shared UI components
│   ├── layouts
│   │   └── Header.tsx 
│   └── partials
│       └── Button.tsx 
├── styles/               # Global and scoped styles
│   └── globals.css
├── package.json
└── next.config.ts