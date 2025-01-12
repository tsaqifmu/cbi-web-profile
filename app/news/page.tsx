import HeroSection from "@/components/media/HeroSection";
import MainNews from "@/components/media/MainNews";
import ListNews from "@/components/media/ListNews";
import CTASection from "@/components/media/CTA";

const Media = () => {
  return (
    <section>
      <HeroSection title="Berita" category="Media & Informasi" />
      <MainNews />
      <ListNews />
      <CTASection />
    </section>
  );
};

export default Media;
