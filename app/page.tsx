"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import placeholder from "@/public/placeholder.jpg"


import Link from "next/link"
import { HeroComponent } from "@/components/hero-component";
import TestComponent from "@/components/ui/test-component";
import TellUsAboutYourProject from "@/components/ui/tell-us-about-your-project";
import TestimonialBrands from "@/components/ui/testimonial-brands";
import { buttonVariants } from "@/components/ui/button"

import { motion } from "framer-motion";
import OurValueComponent from "@/components/ui/test-component"
import CustomerTestimonial from "@/components/ui/customer-testimonial"

export default function Page() {
      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            staggerDirection: 1
          }
        },
        haha: {
 opacity: 1,
          transition: {
            staggerChildren: 0.5,
            staggerDirection: 1
          }

              }
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
  return (
 <>
     <motion.ul
     variants={container}
     initial="hidden"
     animate="show"
     className="flex-1 h-full">

    <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center items-center ">
            <div className="space-y-2  text-left max-w-8xl px-6">
              <motion.li variants={item}>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Build.  
                </h1>
              </motion.li>
              <motion.li variants={item}>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Preview. 
                </h1>
              </motion.li>
              <motion.li variants={item}>
                <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-100">
                Deploy your MVP in 1 month.  
                </h1>
              </motion.li>
              <motion.li variants={item}>
              <p className="max-w-full text-center text-zinc-600 md:text-xl dark:text-zinc-100 mx-auto">
              Turn your idea into real product that users love.
              </p>
              </motion.li>
            </div>
            <div className="w-full max-w-xl py-9 space-y-2 mx-auto space-x-2">
                <div className="flex justify-center items-center space-x-2 min-h-xl">
                <motion.li variants={item}>
                <Button variant="outline" className="" >
                 Book a demo 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
                </Button>
                </motion.li>
                 <motion.li variants={item}>
                <Link href="/services" className={buttonVariants({ variant: "default" })}>Tour our services</Link>
                </motion.li>
                </div>
                 <motion.li variants={item}>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 ">
                Get ready to redefine your software product.
                <Link className="underline underline-offset-2 text-zinc-600 px-1" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
              </motion.li>
            </div>
          </div>
        </div>
      </div>
    </section>

    </motion.ul>
    <TestimonialBrands />

  <>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1,  transition: {ease: "easeIn",  delay: 0.5, }}}
     className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl" style={{"opacity": 1, }}>
              <h2>
                <span className="sr-only"> - </span>
                <span
                className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">Harnessing technology for a brighter future</span>

              </h2>
              <div className="mt-6 text-xl text-neutral-600">
                <p>We believe technology is the answer to the world’s greatest challenges. We pair modern technologies with design thinking to turn user insights into production-ready apps.</p>

            </div>
          </div>

        </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
             </div></div></div>

   </motion.div>
                    </>

<CustomerTestimonial/>
   {/* <div className="flex-1 min-h-80">
      <Image
      src={placeholder}
      alt="Picture of the author"
      // width={500} 
      // height={500} 
      className="rounded-md object-cover"
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </div> */}
    {/*
      <div className="flex-1 min-h-screen ">
        <HeroComponent />
      </div>

    */}    
    <OurValueComponent />
    <div className="flex-1 min-h-screen ">
        <TellUsAboutYourProject />
    </div>

 </> 
  )
}

