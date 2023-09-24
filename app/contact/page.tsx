import { Button } from "@/components/ui/button"

const features = [
  { name: 'Toronto', description: '33 St.Clair' },
  { name: 'Montreal', description: '5 King St.' },
]

export default function Page() {
  return (
  <>
  <div className="mt-6 relative isolate flex w-full flex-col pt-9">
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

