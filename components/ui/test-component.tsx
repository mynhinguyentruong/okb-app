"use client"
import Image from "next/image"
// import vercelSVG from "@/public/vercel.svg"

import { useRef, useEffect } from "react";
import { useAnimate, stagger, motion, useInView } from "framer-motion";


export function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });

  useEffect(() => {

    animate(
      "span",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(200px)" },
      {
        duration: 1,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(200px)" },
      {
        duration: 2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scope;
}

export default function OurValueComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const scope = useMenuAnimation(isInView);

  return (
  <div ref={scope}>
      <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl" style={{"opacity": 1, "transform": "none"}}>
              <h2> 
                <span className="mb-6 block font-display text-base font-semibold text-neutral-950">Our values</span>
                <span className="sr-only"> - </span>
                <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">Balancing reliability and innovation</span></h2><div className="mt-6 text-xl text-neutral-600">
                <span >We strive to stay at the forefront of emerging trends and technologies, we adapt, innovate and work with customers to find the optimal solutions.</span>

            </div>

          </div>

        </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div >
              <ul ref={ref} role="list" className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                  <div style={{"opacity": 1, "transform": "none"}}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Meticulous.</strong>We pay close attention to detail and make sure that everything is done accurately and thoroughly.
                  </div>
                  </div>

                </li>
                <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                  <div style={{"opacity": 1, "transform": "none"}}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Efficient.</strong> We pride ourselves on never missing a deadline.</div></div></li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{"opacity": 1, "transform": "none"}}><div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Adaptable.</strong> Every business has unique needs that demand adaptability.</div></div>

                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{"opacity": 1, "transform": "none"}}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Honest.</strong> We are transparent about all of our processes, banking on the simple fact our clients have limited time.</div></div></li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{"opacity": 1, "transform": "none"}}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Loyal.</strong> We foster long-term relationships with our clients that go beyond just delivering a product.</div></div></li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{"opacity": 1, "transform": "none"}}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"><strong className="font-semibold text-neutral-950">Innovative.</strong> The technological landscape is always evolving and so are we. We are constantly on the lookout for new ideas.</div></div></li>

                    </ul></div></div></div>

                    </div>
                    </div>
      )
}
