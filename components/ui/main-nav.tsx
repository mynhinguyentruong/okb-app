import Link from "next/link"

import{ siteConfig } from "@/config/site"

import Logo from "./logo"
import dynamic from 'next/dynamic'


const DynamicImportNavElements = dynamic(() => import('./navigation/nav-elements'))

export default function MainNav() {

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
      <Logo />
<span className="sr-only hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <DynamicImportNavElements />
    </div>
  )
}


