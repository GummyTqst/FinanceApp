import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Sidebar from '../components/Sidebar/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <div className="app-layout">
      <Sidebar />

      <main className="app-content">
        <Outlet />
      </main>

      <TanStackRouterDevtools position='bottom-right' />
    </div>
  ),
})