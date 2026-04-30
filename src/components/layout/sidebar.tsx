import { SidebarClient } from './sidebar-client'
import { SidebarUserPanel } from './sidebar-user-panel'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarClient footer={<SidebarUserPanel />}>
      {children}
    </SidebarClient>
  )
}
