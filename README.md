## Structure

```
project
├── public/                     # Static files (favicon, index.html, manifest.json)
│   ├── favicon.io
│   ├── index.html
│   ├── manifest.json
│   
├── src/
│   ├── assets/                 # Static assets (images, fonts)
│   │   ├── fonts/
│   │   ├── images/
│   │
│   ├── components/             # UI Components 
│   │   ├── ui/                 # Smallest reusable components (Button, Input, Label)
│   │   ├── layout/             # Smallest reusable layouts (Navbar, Sidebar, Footer)
│   │   ├── hooks/              # Custom reusable hooks (useAuth, useTheme)
│   │   ├── utils/              # Utility functions (formatDate, debounce)
│   │
│   ├── pages/                  # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Dashboard/
│   │
│   ├── store/                  # Manage state (Redux, Zustand)
│   │   ├── slices/             # Redux slices (authSlice, userSlice)
│   │   ├── index.ts            # Combine reducers
│   │
│   ├── routes/                 # Centralized app routing
│   │   ├── privateRoutes.ts    # Require to login
│   │   ├── publicRoutes.ts     # No require to login
│   │   ├── index.tsx           # Main app router
│   │
│   ├── services/              `# API services (fetching data)
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │
│   ├── config/
│   │   ├── axios.ts
│   │   ├── env.ts              # Load .env
│   │   ├── theme.ts            # Dark/light theme config
│   │
│   ├── types/                  # Typescript types
│   │   ├── user.ts
│   │   ├── auth.ts
│   ├── App.tsx                 # App compoment
│   ├── main.tsx                # Entry point
├── .env
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── package.json
├── README.md
```

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