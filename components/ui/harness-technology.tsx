"use client"
import { useRef } from "react";

import { motion, useInView } from "framer-motion"
export default function HarnessTechnology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
      <div
   style={{
    transform: isInView ? "none" : "translateY(-200py)",
    opacity: isInView ? 1 : 0,
    transition: " 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
   }}
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
                <p ref={ref}>We believe technology is the answer to the world’s greatest challenges. We pair modern technologies with design thinking to turn user insights into production-ready apps.</p>

            </div>
          </div>

        </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
             </div></div></div>

   </div>

      ) 
}
