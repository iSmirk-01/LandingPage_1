import Achievements from "./ui/achievements/Achievements"
import FeaturesComponent from "./ui/features/FeaturesSection"
import Hero from "./ui/hero/HeroSection"
import Quotes from "./ui/quote/QuoteSection"
import Tips1 from "./ui/tips/Tips1"
import TrustedBy from "./ui/Trusted"

function page() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <FeaturesComponent />
      <Quotes />
      <Achievements />
      <Tips1 />
    </div>
  )
}

export default page
