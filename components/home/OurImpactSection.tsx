import HomeTitle from "./HomeTitle";

const OurImpactSection = () => {
  return (
    <section className="bg-[#EEE]">
      <div className="mx-auto min-h-[40rem] max-w-7xl px-6 py-16 md:px-0 md:py-24">
        {/* Title */}
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <HomeTitle>Dampak Kami</HomeTitle>
          </div>
          <p className="flex-1 text-lg text-[#666]">
            Melalui riset berkelanjutan, kami terus berusaha untuk menjadi
            pelopor pengembangan inovasi bioteknologi terkini yang berkualitas.
          </p>
        </div>

        {/* Banners */}
        <div className="mt-12 flex flex-col gap-10">
          {/* Banner 1 */}
          <div className="min-h-[25rem] w-full rounded-3xl bg-red-500"></div>

          {/* Banner 2 */}
          <div className="min-h-[25rem] w-full rounded-3xl bg-green-500"></div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
