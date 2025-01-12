import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";

const HeroSection = () => {
  return (
    <HeroSectionGeneral
      imgUrl="/blog-detail.jpeg"
      category="Kategori"
      title={
        <>
          <h1 className="text-center text-3xl font-bold text-white lg:text-5xl xl:text-[56px]">
            Blog title heading will go here
          </h1>
          <div className="flex items-center justify-center gap-x-2 pt-6">
            <p className="text-xs font-bold text-white">
              Oleh <span className="font-normal">nama</span>
            </p>
            <span>•</span>
            <p className="text-xs font-normal text-white">12 Desember 2024</p>
          </div>
        </>
      }
    />
  );
};

export default HeroSection;
