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
        <div className="">
          <div className="bg-background">
            <div className="flex">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
