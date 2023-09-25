"use client"
import Image from "next/image"
// import vercelSVG from "@/public/vercel.svg"

import { useRef } from "react";
import { useInView } from "framer-motion";
import Logo from "@/public/vercel.svg"

export default function TestimonialBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
   <div 
     style={{
          transform: isInView ? "none" : "translateY(-200py)",
          opacity: isInView ? 1 : 0,
          transition: " 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
   className="mt-2 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-6">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="flex items-center gap-x-8" style={{"opacity": 1 }}>
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">We’ve worked with hundreds of amazing people</h2>
            <div className="h-px flex-auto bg-neutral-800">

            </div>

        </div>
          <div>
            <ul role="list" className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              <li ref={ref}>
                <div >
                  <Image alt="Family Fund" loading="lazy" width={184} height={36} src={Logo} />
                </div>
              </li>
              <li>
                <div >
                  <Image alt="Family Fund" loading="lazy" width={184} height={36} src={Logo} />
                </div>
              </li>
              <li>
                <div >
                  <Image alt="Family Fund" loading="lazy" width={184} height={36} src={Logo} />
                </div>
              </li>
              <li>
                <div >
                  <Image alt="Family Fund" loading="lazy" width={184} height={36} src={Logo} />
                </div>
              </li>

            </ul>

            </div>

            </div>
            </div>
            </div>      
  )
}
