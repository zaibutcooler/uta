import { ReactNode } from "react"
import { Metadata } from "next"
import { playlists } from "@/data/playlists"

import { Header } from "@/components/navigations/header"
import { Sidebar } from "@/components/navigations/sidebar"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Header />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
