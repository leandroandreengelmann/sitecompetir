"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "./sidebar"
import { MobileHeader } from "./mobile-header"

const STANDALONE_ROUTES = ["/", "/competir"]

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isStandalone = STANDALONE_ROUTES.some((r) => pathname.startsWith(r))

  if (isStandalone) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <MobileHeader />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
