"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import { LocationTracker } from "@/components/location-tracker"
import { LaundryStatus } from "@/components/laundry-status"

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideComponents = ["/signup", "/login", "/plans", "/about"].includes(pathname)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {!hideComponents && <LocationTracker />}
      <main className="flex-1">{children}</main>
      {!hideComponents && <LaundryStatus />}
    </div>
  )
} 