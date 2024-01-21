import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteMetaData } from "@/config/metadata"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = siteMetaData

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
        {children}
        </ClerkProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
