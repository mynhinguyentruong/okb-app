"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"


import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ReactNode } from "react"

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export default function HeroSectionOne({children}: {children: ReactNode}) {

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="w-full  py-12 md:py-24 lg:py-32 xl:py-48 ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center items-center ">
            <motion.div 
                    variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
              className="space-y-2  text-left max-w-8xl px-6">
            {children} 
            </motion.div>
            <motion.div variants={itemVariants} className="w-full max-w-xl py-9 space-y-2 mx-auto space-x-2">
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
      )
}
