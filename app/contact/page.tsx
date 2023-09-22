import { Button } from "@/components/ui/button"

const features = [
  { name: 'Toronto', description: '33 St.Clair' },
  { name: 'Montreal', description: '5 King St.' },
]

export default function Page() {
  return (
  <>
  <div className="relative isolate flex w-full flex-col pt-9">
    <svg aria-hidden="true" className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
    <rect width="100%" height="100%" fill="url(#:r5:)" strokeWidth="0"></rect>
      <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
      <path transform="translate(64 160)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
    <path transform="translate(128 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
    <path transform="translate(288 480)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
    <path transform="translate(512 320)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
    <path transform="translate(544 640)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
    <path transform="translate(320 800)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>

      </svg>
      <defs>
        <pattern id=":r5:" width="96" height="480" x="50%" patternUnits="userSpaceOnUse" patternTransform="translate(0 -96)" fill="none">
          <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128">

          </path>

        </pattern>

      </defs>
    </svg>
  </div>

  <div className="relative lg:ml-36">
      <h1>
        <span className="block font-display text-base font-semibold text-neutral-950">Contact us</span>
        <span className="sr-only"> - </span>
        <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">Let&apos;s work together</span>

      </h1>
      <div className="mt-6 max-w-3xl text-xl text-neutral-600"><p>We can’t wait to hear from you.</p></div>
  </div>

  <div className="w-full grid-cols-2">
    <div>
      
    </div>

  </div>

        <div className="grid mx-auto w-full grid-cols-1 items-center gap-x-8 gap-y-16  py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="relative">
        <span className="block font-display text-base font-semibold text-neutral-950">Our offices</span>
          <p className="mt-4 text-gray-500">
            Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 border-b pb-3 border-gray-200 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

            {features.map((feature) => (
              <div key={feature.name} className=" pb-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        <div className="mt-6">
        <span className="block font-display text-base font-semibold text-neutral-950">Email us</span>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div  className="border-b border-gray-200 pb-4">
                <dt className="font-medium text-gray-900">Press</dt>
                <dd className="mt-2 text-sm text-gray-500">press@studio.com</dd>
              </div>
              <div  className="border-b border-gray-200 pb-4">
                <dt className="font-medium text-gray-900">Careers</dt>
                <dd className="mt-2 text-sm text-gray-500">careers@studio.com</dd>
              </div>
          </dl>
        </div>
        </div>
        <div className="relative flex flex-col h-full px-3">
        <span className="block font-display text-base font-semibold text-neutral-950">Work inquiries</span>
          <form className="mt-4 border border-gray-200 rounded-lg">
            <label
              htmlFor="Name"
              className="relative block pt-6 px-8 border-b border-gray-200  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
            <input
              type="text"
              id="Name"
              className="pt-6 py-6 h-12 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            Name
            </span>
            </label>
            <label
              htmlFor="Name"
              className="relative block pt-6 px-8 border-b border-gray-200  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
            <input
              type="text"
              id="Name"
              className="pt-6 py-6 h-12 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            Email 
            </span>
            </label>
            <label
              htmlFor="Name"
              className="relative block pt-6 px-8 border-b border-gray-200  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
            <input
              type="text"
              id="Name"
              className="pt-6 py-6 h-12 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            Company 
            </span>
            </label>
            <label
              htmlFor="Name"
              className="relative block pt-6 px-8 border-b border-gray-200  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
            <input
              type="text"
              id="Name"
              className="pt-6 py-6 h-12 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            Phone 
            </span>
            </label>
            <label
              htmlFor="Name"
              className="relative block pt-6 px-8 border-b border-gray-200  focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
            <input
              type="text"
              id="Name"
              className="pt-6 py-6 h-12 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Name"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
            Message
            </span>
            </label>
    </form>
            <Button type="button" className="mt-6 max-w-sm">
            Let&apos;s work together
            </Button>

        </div>
      </div>

  </>
  )
}


// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
//           <p className="mt-4 text-gray-500">
//             The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
//             steel divider separates active cards from new ones, or can be used to archive important task lists.
//           </p>
//
//           <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//             {features.map((feature) => (
//               <div key={feature.name} className="border-t border-gray-200 pt-4">
//                 <dt className="font-medium text-gray-900">{feature.name}</dt>
//                 <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//         <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//             alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
//             alt="Top down view of walnut card tray with embedded magnets and card groove."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
//             alt="Side of walnut card tray with card groove and recessed card area."
//             className="rounded-lg bg-gray-100"
//           />
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
//             alt="Walnut card tray filled with cards and card angled in dedicated groove."
//             className="rounded-lg bg-gray-100"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
//
//   <main className="w-full flex-auto">
//   <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
//   <div className="mx-auto max-w-2xl lg:max-w-none">
//   <div style={{"opacity": "1", "transform": "none"}}>
//   <h1>
//   <span className="block font-display text-base font-semibold text-neutral-950">Contact us</span>
//   <span className="sr-only"> - </span>
//   <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">Let’s work together
//   </span>
//   
//   </h1>
//   <div className="mt-6 max-w-3xl text-xl text-neutral-600">
//     <p>We can’t wait to hear from you.</p>
//
//   </div>
//   
//   </div>
//
//   </div>
//
//   </div>
//
//   <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
//   <div className="mx-auto max-w-2xl lg:max-w-none">
//   <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
//   <div className="lg:order-last" style="opacity: 1; transform: none;"><form><h2 className="font-display text-base font-semibold text-neutral-950">Work inquiries</h2>
//   <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//   <div className="group relative z-0 transition-all focus-within:z-10"><input id=":S1:" autocomplete="name" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" type="text" name="name"><label for=":S1:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Name</label>
//
//   </div>
//   <div className="group relative z-0 transition-all focus-within:z-10"><input id=":S2:" autocomplete="email" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" type="email" name="email"><label for=":S2:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Email</label>
//
//   </div>
//   <div className="group relative z-0 transition-all focus-within:z-10"><input id=":S3:" autocomplete="organization" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" type="text" name="company"><label for=":S3:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Company</label>
//
//   </div>
//   <div className="group relative z-0 transition-all focus-within:z-10"><input id=":S4:" autocomplete="tel" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" type="tel" name="phone"><label for=":S4:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Phone</label></div><div className="group relative z-0 transition-all focus-within:z-10"><input id=":S5:" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" type="text" name="message"><label for=":S5:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">Message</label></div><div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl"><fieldset><legend className="text-base/6 text-neutral-500">Budget</legend><div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
//   <label className="flex gap-x-3"><input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2" type="radio" value="25" name="budget"><span className="text-base/6 text-neutral-950">$25K – $50K</span></label><label className="flex gap-x-3">
//   <input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2" type="radio" value="50" name="budget"><span className="text-base/6 text-neutral-950">$50K – $100K</span></label><label className="flex gap-x-3"><input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2" type="radio" value="100" name="budget"><span className="text-base/6 text-neutral-950">$100K – $150K</span></label><label className="flex gap-x-3"><input className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2" type="radio" value="150" name="budget"><span className="text-base/6 text-neutral-950">More than $150K</span></label></div></fieldset></div></div><button className="mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800" type="submit"><span className="relative top-px">Let’s work together</span></button></form></div><div style="opacity: 1; transform: none;"><h2 className="font-display text-base font-semibold text-neutral-950">Our offices</h2><p className="mt-6 text-base text-neutral-600">Prefer doing things in person? We don’t but we have to list our addresses here for legal reasons.</p><ul role="list" className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"><li><address className="text-sm not-italic text-neutral-600"><strong className="text-neutral-950">Copenhagen</strong><br>1 Carlsberg Gate<br>1260, København, Denmark</address></li><li><address className="text-sm not-italic text-neutral-600"><strong className="text-neutral-950">Billund</strong><br>24 Lego Allé<br>7190, Billund, Denmark</address></li></ul><div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"><h2 className="font-display text-base font-semibold text-neutral-950">Email us</h2><dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2"><div><dt className="font-semibold text-neutral-950">Careers</dt><dd><a className="text-neutral-600 hover:text-neutral-950" href="mailto:careers@studioagency.com">careers@studioagency.com</a></dd></div><div><dt className="font-semibold text-neutral-950">Press</dt><dd><a className="text-neutral-600 hover:text-neutral-950" href="mailto:press@studioagency.com">press@studioagency.com</a></dd></div></dl></div><div className="mt-16 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
//   <h2 className="font-display text-base font-semibold text-neutral-950">Follow us</h2><ul role="list" className="flex gap-x-10 text-neutral-950 mt-6"><li><a aria-label="Facebook" className="transition hover:text-neutral-700" href="https://facebook.com"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"></path></svg></a></li><li><a aria-label="Instagram" className="transition hover:text-neutral-700" href="https://instagram.com"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"></path></svg></a></li><li><a aria-label="Twitter" className="transition hover:text-neutral-700" href="https://twitter.com">
//   <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="M8.29 20.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.392 4.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.715v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.41a11.616 11.616 0 0 0 6.29 1.84"></path></svg></a></li><li><a aria-label="GitHub" className="transition hover:text-neutral-700" href="https://github.com"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path></svg></a></li><li><a aria-label="Dribbble" className="transition hover:text-neutral-700" href="https://dribbble.com"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"></path></svg></a></li></ul></div></div></div></div></div></main><footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40"><div className="mx-auto max-w-2xl lg:max-w-none"><div style="opacity: 1; transform: none;"><div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"><nav><ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3"><li>
//   <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">Work</div><ul role="list" className="mt-4 text-sm text-neutral-700"><li className="mt-4"><a className="transition hover:text-neutral-950" href="/work/family-fund">FamilyFund</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/work/unseal">Unseal</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/work/phobia">Phobia</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/work">See all <span aria-hidden="true">→</span></a></li></ul></li><li><div className="font-display text-sm font-semibold tracking-wider text-neutral-950">Company</div><ul role="list" className="mt-4 text-sm text-neutral-700"><li className="mt-4"><a className="transition hover:text-neutral-950" href="/about">About</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/process">Process</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/blog">Blog</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="/contact">Contact us</a></li></ul></li><li><div className="font-display text-sm font-semibold tracking-wider text-neutral-950">Connect</div><ul role="list" className="mt-4 text-sm text-neutral-700"><li className="mt-4"><a className="transition hover:text-neutral-950" href="https://facebook.com">Facebook</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="https://instagram.com">Instagram</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="https://twitter.com">Twitter</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="https://github.com">GitHub</a></li><li className="mt-4"><a className="transition hover:text-neutral-950" href="https://dribbble.com">Dribbble</a></li></ul></li></ul></nav><div className="flex lg:justify-end"><form className="max-w-sm"><h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">Sign up for our newsletter</h2><p className="mt-4 text-sm text-neutral-700">Subscribe to get the latest design news, articles, resources and inspiration.</p><div className="relative mt-6"><input placeholder="Email address" autocomplete="email" aria-label="Email address" className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5" type="email"><div className="absolute inset-y-1 right-1 flex justify-end"><button type="submit" aria-label="Submit" className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"><svg viewBox="0 0 16 6" aria-hidden="true" className="w-4"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path></svg></button></div></div></form></div></div>
//   <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12"><a aria-label="Home" href="/"><svg viewBox="0 0 130 32" aria-hidden="true" className="group/logo h-8"><svg viewBox="0 0 32 32" aria-hidden="true" preserveAspectRatio="xMinYMid meet"><rect clip-path="url(#:r6:-clip)" className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"></rect><use href="#:r6:-path" className="stroke-neutral-950" fill="none" stroke-width="1.5"></use><defs><path id=":r6:-path" d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"></path><clipPath id=":r6:-clip"><use href="#:r6:-path"></use></clipPath></defs></svg>
//   <path className="fill-neutral-950" d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"></path></svg></a><p className="text-sm text-neutral-700">© Studio Agency Inc. 20.253</p>
//
//   </div>
//   
//   </div>
//   
//   </div>
//
//   </footer>
//
//   </div> )
// }
//
