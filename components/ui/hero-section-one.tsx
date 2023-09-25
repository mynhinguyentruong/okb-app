// "use client"
// import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function HeroSectionOne() {
      //   const container = {
      //     hidden: { opacity: 0 },
      //     show: {
      //       opacity: 1,
      //       transition: {
      //         staggerChildren: 0.5,
      //         staggerDirection: 1
      //       }
      //     },
      //   }
      //
      // const item = {
      //   hidden: { opacity: 0 },
      //   show: { opacity: 1 }
      // }
      //
  return (
   // {/*
   // <motion.ul
   //   variants={container}
   //   initial="hidden"
   //   animate="show"
   //   className="flex-1 h-full">
   //
   // */} 
    <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center items-center ">
            <div className="space-y-2  text-left max-w-8xl px-6">
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Build.  
                </h1>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Preview. 
                </h1>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Deploy your MVP in 1 month.  
                </h1>
              <p className="max-w-full text-center text-zinc-600 md:text-xl dark:text-zinc-100 mx-auto">
              Turn your idea into real product that users love.
              </p>
            </div>
            <div className="w-full max-w-xl py-9 space-y-2 mx-auto space-x-2">
                <div className="flex justify-center items-center space-x-2 min-h-xl">
                <Button variant="outline" className="" asChild >
                  <Link href="https://calendly.com/nhinguyen-ihn/kjhjkhkj">Book a demo
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
                  </Link>
                </Button>
                <Link href="/services" className={buttonVariants({ variant: "default" })}>Tour our services</Link>
                </div>
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
      )
}
