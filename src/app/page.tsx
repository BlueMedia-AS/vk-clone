import PremiumHeader from "@/components/premium/Header";
import PremiumHero from "@/components/premium/Hero";
import PremiumServices from "@/components/premium/Services";
import PremiumPartner from "@/components/premium/Partner";
import PremiumStats from "@/components/premium/Stats";
import PremiumSustainability from "@/components/premium/Sustainability";
import PremiumTestimonials from "@/components/premium/Testimonials";
import PremiumBlog from "@/components/premium/Blog";
import PremiumContact from "@/components/premium/Contact";
import PremiumFooter from "@/components/premium/Footer";
import { AngleDivider } from "@/components/premium/SectionDivider";

export default function Home() {
  return (
    <>
      <PremiumHeader />
      <main>
        <PremiumHero />
        <PremiumServices />
        <PremiumPartner />
        <PremiumStats />
        <PremiumSustainability />
        <PremiumTestimonials />
        <PremiumBlog />
        <AngleDivider color="#1a2744" />
        <PremiumContact />
        <div className="w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <polygon points="0,0 1200,60 1200,0 0,0" fill="#1a2744" />
          </svg>
        </div>
      </main>
      <PremiumFooter />
    </>
  );
}
