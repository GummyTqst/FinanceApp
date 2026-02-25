import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Sidebar from '../components/Sidebar/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <div className="app-layout">
      {/* The Sidebar stays mounted across all navigation */}
      <Sidebar />

      <main className="app-content">
        {/* The Outlet renders the component for the current URL */}
        <Outlet />
      </main>

      {/* Recommended: Useful for debugging your routes during development */}
      <TanStackRouterDevtools />
    </div>
  ),
})