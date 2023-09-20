import Image from "next/image"
import vercelSVG from "@/public/vercel.svg"

export default function TestimonialBrands() {
  return (
    <div className="flex-1 h-40">
    <section className="w-full   ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="max-w-[600px] text-zinc-600 md:text-xl dark:text-zinc-100 mx-auto">
              Trusted by the best software team                
              </p>
            </div>
            <div className="w-full min-w-sm  flex justify-center items-center">
              <Image
                  src={vercelSVG}
                  alt="Picture of the author"
                  className="w-24 m-3"
        />

        <Image
          src={vercelSVG}
          alt="Picture of the author"
          className="w-24 m-3"
        />
        <Image
          src={vercelSVG}
          alt="Picture of the author"
          className="w-24 m-3"
        />

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

      )
}

// export default function TestimonialBrands() {
//   return (
//     <div className="w-full h-40 flex-1 justify-center items-center flex-col gap-14 p-5">
//         <h3 className="block">Trusted by the best software team</h3>
//         <div className="flex">
//
//
//         </div>
//
//
//     </div>
//       )
// }
