import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { LocationTracker } from "@/components/location-tracker"
import { LaundryStatus } from "@/components/laundry-status"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iron-man | On-Demand Laundry Service",
  description: "Premium laundry and ironing services with doorstep pickup and delivery",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <LocationTracker />
            <main className="flex-1">{children}</main>
            <LaundryStatus />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'