import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Sidebar from '../components/Sidebar/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <div className="flex min-h-screen max-lg:flex-col">
      <Sidebar />

      <main className="grow p-500 overflow-y-auto max-lg:pb-25">
        <Outlet />
      </main>

      <TanStackRouterDevtools position='bottom-right' />
    </div>
  ),
})