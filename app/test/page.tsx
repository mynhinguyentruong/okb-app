import  MainNav  from "@/components/ui/main-nav";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import placeholder from "@/public/placeholder.jpg"


import Link from "next/link"
import { HeroComponent } from "@/components/hero-component";
import Footer from "@/components/ui/footer";
import TestimonialBrands from "@/components/ui/testimonial-brands";

export default function Page() {
  return (
  <div className="min-h-screen bg-background font-sans antialiased">
    <div className="relative flex min-h-screen flex-col">
     <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
       Login 
        </div>
      </div>
    </header>
    <div className="flex-1 h-90">
    <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Build your MVP in 1 month.  
              </h1>
              <p className="max-w-[600px] text-zinc-600 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of your inbox. Fast, secure, and designed for modern life.
              </p>
            </div>
            <div className="w-full max-w-sm py-6 space-y-2 mx-auto space-x-2">
                <Button variant="outline" type="submit">
                 Book a demo 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

                </Button>
                <Button  type="submit">
                  Tour our products
                </Button>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 ">
                Get ready to redefine your software product.
                <Link className="underline underline-offset-2 text-zinc-600 px-1" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
    <TestimonialBrands />
    <div className="flex-1 min-h-80">
      <Image
      src={placeholder}
      alt="Picture of the author"
      // width={500} 
      // height={500} 
      className="rounded-md object-cover"
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </div>
    <div className="flex-1 min-h-screen ">
      <HeroComponent />
    </div>
    <Footer /> 
    </div>
    </div>
  )
}
