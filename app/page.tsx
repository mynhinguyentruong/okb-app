import { Button } from "@/components/ui/button"
import Image from 'next/image'
import placeholder from "@/public/placeholder.jpg"


import Link from "next/link"
import { HeroComponent } from "@/components/hero-component";
import TestComponent from "@/components/ui/test-component";
import TellUsAboutYourProject from "@/components/ui/tell-us-about-your-project";
import TestimonialBrands from "@/components/ui/testimonial-brands";
import { buttonVariants } from "@/components/ui/button"


export default function Page() {
  return (
 <>
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
              Turn your idea into real product that users love.
              </p>
            </div>
            <div className="w-full max-w-sm py-6 space-y-2 mx-auto space-x-2">
                <Button variant="outline" >
                 Book a demo 
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

                </Button>
                <Link href="/services" className={buttonVariants({ variant: "default" })}>Tour our services</Link>

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

  <>
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-4">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
          <rect width="100%" height="100%" fill="url(#:r1r:)" strokeWidth="0"></rect>
        <svg x="50%" y="-270" strokeWidth="0" className="overflow-visible">
          <path transform="translate(64 160)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
          <path transform="translate(128 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
          <path transform="translate(288 480)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path><path transform="translate(512 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
          <path transform="translate(544 640)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
          <path transform="translate(320 800)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>

        </svg>
        <defs>
          <pattern id=":r1r:" width="96" height="480" x="50%" patternUnits="userSpaceOnUse" patternTransform="translate(0 -270)" fill="none">
            <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>

          </pattern>
        </defs>

        </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl" style={{"opacity": 1, "transform": "none"}}>
              <h2>
                <span className="sr-only"> - </span>
                <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">Harnessing technology for a brighter future</span></h2><div className="mt-6 text-xl text-neutral-600">
                <p>We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation.</p>

            </div>

          </div>

        </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
             </div></div></div>

   </div>
                    </>


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
    {/*
      <div className="flex-1 min-h-screen ">
        <HeroComponent />
      </div>

    */}    
    <TestComponent />
    <div className="flex-1 min-h-screen ">
        <TellUsAboutYourProject />
    </div>

 </> 
  )
}

