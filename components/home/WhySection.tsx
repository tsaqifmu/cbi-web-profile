import Image from "next/image";

import HomeTitle from "./HomeTitle";

const WhySection = () => {
  return (
    <section className="min-h-[40rem] w-full bg-[#eee]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:gap-16 md:px-0 md:py-24">
        {/* Text */}
        <div className="flex flex-1 flex-col">
          <HomeTitle>Mengapa Bioteknologi?</HomeTitle>
          <div className="mt-8 flex flex-col gap-6 text-lg text-[#666]">
            <p>
              Sektor agribisnis berada di persimpangan kritis. Penurunan
              kualitas lahan, dampak bahan kimia, dan ancaman krisis ekosistem
              memaksa kita untuk mencari solusi baru yang tidak hanya efektif,
              tetapi juga berkelanjutan. Di tengah tantangan ini, bioteknologi
              muncul sebagai terobosan yang menjanjikan transformasi menyeluruh.
            </p>
            <p>
              Melalui pendekatan ilmiah berbasis mikroba alami, bioteknologi
              memberikan cara baru untuk meningkatkan produktivitas sekaligus
              memperbaiki keseimbangan alam. Ini bukan sekadar inovasi—ini
              adalah langkah visioner untuk memastikan pertanian, peternakan,
              dan perikanan tidak hanya bertahan, tetapi juga berkembang dengan
              cara yang lebih cerdas, efisien, dan selaras dengan masa depan
              bumi
            </p>
          </div>
        </div>

        {/* Image */}
        <Image
          src="/img-why-section.png"
          alt="Petani dan sawah"
          width={626}
          height={406}
          className="max-h-[456px] flex-1 rounded-3xl object-cover md:h-[25rem]"
        />
      </div>
    </section>
  );
};

export default WhySection;
