import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// 1. Import the generated route tree
import { routeTree } from './routeTree.gen'

// 2. Import your global styles
import "./Styles/main.sass"

// 3. Create the router instance
const router = createRouter({ routeTree })

// 4. Register the router for TypeScript autocomplete
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 5. Render the RouterProvider instead of <App />
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)