"use client"
import Image from "next/image"
import vercelSVG from "@/public/vercel.svg"

import { useRef } from "react";
import { useInView } from "framer-motion";
import BackgroundSVG from "./background-svg";

export default function CustomerTestimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div 
      style={{
        transform: isInView ? "none" : "translateY(-200py)",
        opacity: isInView ? 1 : 0,
        transition: " 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
      <BackgroundSVG />
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl lg:max-w-none">
  <div >
    <figure className="mx-auto max-w-4xl">
      <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
      <p ref={ref} className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">The team at Studio went above and beyond with our onboarding, they have a very strong focus on the end user. We can come to them with a vision of what the product has to do, but they&apos;re very disciplined about helping us think through various segments of users and how each would use our application.</p>
      </blockquote>
      <figcaption className="mt-10">
      <Image alt="Phobia" loading="lazy" width={184} height={36} src={vercelSVG} />

      </figcaption>

    </figure>

  </div>

  </div>

</div>
</div>
      )
}
