import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  MainNav  from "@/components/ui/main-nav";
import { Button } from "@/components/ui/button"

import Link from "next/link"


import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio Agency',
  description: 'Independent software development agency',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col ">
          <div className="min-h-screen bg-background font-sans antialiased">
            <div className="relative flex min-h-screen flex-col">
             <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
              <div className="container flex h-14 items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <Button asChild>
                    <Link href="/contact">
                    Contact us
                    </Link>
                  </Button>
                </div>
              </div>
            </header>
    {children}
    <Footer /> 
    </div>
    </div>

      </main>
      </body>
    </html>
  )
}
