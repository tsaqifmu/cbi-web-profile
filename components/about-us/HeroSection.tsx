import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";

const HeroSectionAboutUs = () => {
  return (
    <HeroSectionGeneral
      imgUrl="/hero-tentang-kami.jpg"
      title={
        <h1 className="text-center text-white">
          Perusahaan Bioteknologi <br /> Terkemuka di Indonesia
        </h1>
      }
    />
  );
};

export default HeroSectionAboutUs;
