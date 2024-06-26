import * as React from "react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  simpleFooter?: boolean
}

export function SiteFooter({ simpleFooter, className }: SiteFooterProps) {
  return (
    <footer className="p-2 m-5 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-t border-gray-200 mt-8 pt-4">
          <div className="text-sm text-gray-500 flex flex-row"> {siteConfig.name} - built by Akhilesh Rangani.</div>
          <div className="flex items-center space-x-4">
            <Link className="text-sm text-gray-500 hover:text-blue-500" href="https://www.linkedin.com/in/akhileshrangani/"> linkedin
            </Link>
            <Link className="text-sm text-gray-500 hover:text-blue-500" href="https://github.com/Akhileshrangani4"> Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}