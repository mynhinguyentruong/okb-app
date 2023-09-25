import TellUsAboutYourProject from "@/components/ui/tell-us-about-your-project";
import TestimonialBrands from "@/components/ui/testimonial-brands";
import OurValueComponent from "@/components/ui/test-component"
import CustomerTestimonial from "@/components/ui/customer-testimonial"
import HarnessTechnology from "@/components/ui/harness-technology"
import HeroSectionOne from "@/components/ui/hero-section-one";
import HeroSectionTest from "@/components/ui/hero-section-test";


export default function Page() {

  return (
 <>
    <HeroSectionOne >
      <HeroSectionTest />
    </HeroSectionOne>
    
    <TestimonialBrands />

    <HarnessTechnology />

    <CustomerTestimonial/>

    <OurValueComponent />

    <div className="flex-1 min-h-screen ">
        <TellUsAboutYourProject />
    </div>

 </> 
  )
}

