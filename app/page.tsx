import Achievements from "./ui/achievements/Achievements"
import FeaturesComponent from "./ui/features/FeaturesSection"
import Hero from "./ui/hero/HeroSection"
import Quotes from "./ui/quote/QuoteSection"
import TrustedBy from "./ui/Trusted"

function page() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <FeaturesComponent />
      <Quotes />
      <Achievements />
    </div>
  )
}

export default page
