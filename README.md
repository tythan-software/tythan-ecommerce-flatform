### React App Structure

```
src/
├── assets/                # Static assets (images, fonts)
│   ├── fonts/
│   ├── images/
│
├── components/            # UI Components (Atomic Design)
│   ├── atoms/             # Smallest reusable components (Button, Input, Label)
│   ├── molecules/         # Grouped atoms forming functional components
│   ├── organisms/         # Complex UI structures combining molecules
│   ├── templates/         # Page layouts (AuthLayout, DashboardLayout)
│
├── lib/                   # Business logic and utilities
│   ├── constants/         # Global constants
│   ├── helpers/           # Utility functions
│   ├── hooks/             # Custom reusable hooks
│   ├── store/             # State management (Redux/Zustand)
│   ├── types/             # Shared TypeScript types and interfaces
│       ├── types.ts
│
├── pages/                 # Page components (LoginPage, DashboardPage)
│   ├── App.tsx           # Main app entry point
│
├── routes/                # Centralized app routing
│   ├── routes.tsx
│
├── services/              # API services (fetching data)
│   ├── products/          # Product API services
│   │   ├── queries.ts     # React Query fetching
│   │   ├── keys.ts        # Query keys
│   │   ├── mutations.ts   # React Query mutations
│   │   ├── api.ts         # API functions
│
├── styles/                # Global styles (CSS Modules, Tailwind, etc.)
│   ├── globals.css
│
├── index.tsx              # React root file
├── .env.local             # Environment variables
├── .gitignore
├── package.json
```

### Atom Design

- **Atom:** It's the smallest components, such as buttons, titles, inputs, fonts, or animations. They can be used globally or within other components and templates, handling multiple states like disabled, hover, or different sizes.

- **Molecule:** It's a combination of one or more atom components. Here, we start assembling more complex and reusable components. Molecules can have their own properties and functions, which are used by atoms, whereas atoms do not have any functions or actions.

- **Organism:** It's composed of multiple molecules working together and may even include atoms to create more detailed interfaces. At this level, components start to take on a more defined structure, but they must remain independent, easily movable, and reusable with any content.

- **Template:** At this stage, we do not focus on building components but rather on setting up their context. Templates establish relationships between organisms and other components by defining positions, layouts, and page structures, but without applying styles, colors, or rendering actual components.

- **Page:** It's a functional part of the app where components are used based on a specific template. These components receive real content and are connected to the entire application. At this stage, we can evaluate the effectiveness of the design system and analyze whether the components are sufficiently independent or need further decomposition.
