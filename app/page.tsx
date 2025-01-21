import Achievements from "./ui/achievements/Achievements"
import FeaturesComponent from "./ui/features/FeaturesSection"
import Footer from "./ui/footer/Footer"
import Hero from "./ui/hero/HeroSection"
import Testimonial from "./ui/testimonial/TestimonialSection"
import Tips1 from "./ui/tips/Tips1"
import Tips2 from "./ui/tips/Tips2"
import TrustedBy from "./ui/trusted/Trusted"

function page() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <FeaturesComponent />
      <Testimonial />
      <Achievements />
      <Tips1 />
      <Tips2 />
      <Footer />
    </div>
  )
}

export default page
