import TellUsAboutYourProject from "@/components/ui/tell-us-about-your-project";
import TestimonialBrands from "@/components/ui/testimonial-brands";
import OurValueComponent from "@/components/ui/test-component"
import CustomerTestimonial from "@/components/ui/customer-testimonial"
import HarnessTechnology from "@/components/ui/harness-technology"
import HeroSectionOne from "@/components/ui/hero-section-one";

export default function Page() {

  return (
 <>
    <HeroSectionOne />
    
    <TestimonialBrands />

    <HarnessTechnology />

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

