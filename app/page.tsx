import FeaturesComponent from "./ui/features/Features"
import Hero from "./ui/hero/Hero"
import TrustedBy from "./ui/trustedBy/Trusted"

function page() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <FeaturesComponent />
    </div>
  )
}

export default page
