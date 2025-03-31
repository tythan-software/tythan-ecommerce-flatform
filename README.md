## Structure

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

## Design Pattern
### Atom Design

- **Atom:** It's the smallest components, such as buttons, titles, inputs, fonts, or animations. They can be used globally or within other components and templates, handling multiple states like disabled, hover, or different sizes.

- **Molecule:** It's a combination of one or more atom components. Here, we start assembling more complex and reusable components. Molecules can have their own properties and functions, which are used by atoms, whereas atoms do not have any functions or actions.

- **Organism:** It's composed of multiple molecules working together and may even include atoms to create more detailed interfaces. At this level, components start to take on a more defined structure, but they must remain independent, easily movable, and reusable with any content.

- **Template:** At this stage, we do not focus on building components but rather on setting up their context. Templates establish relationships between organisms and other components by defining positions, layouts, and page structures, but without applying styles, colors, or rendering actual components.

- **Page:** It's a functional part of the app where components are used based on a specific template. These components receive real content and are connected to the entire application. At this stage, we can evaluate the effectiveness of the design system and analyze whether the components are sufficiently independent or need further decomposition.

## Document
### Storybook

Storybook is an open-source tool for writing component stories that act as documentation for usage and props. It allows developers to build and showcase individual React components without running the entire app, making UI development more efficient and organized.

**How to run**

Start Storybook with

```
npm run storybook
```

This will launch Storybook at http://localhost:6006/

## Testing
### Cypress

Cypress is a JavaScript-based end-to-end testing framework used to test modern web applications. It runs directly in the browser, providing a fast, reliable, and developer-friendly testing experience.

**How to run**

Open Cypress using

```
npx cypress open
```

This will generate a cypress/ folder in your project and open the Cypress Test Runner

Inside the cypress/ folder, you’ll find:
- fixtures/ – Sample test data (e.g., JSON files).
- e2e/ – Store your test scripts.
- support/ – Utility functions and global configurations.