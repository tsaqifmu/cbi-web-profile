import Image from "next/image";

import HomeTitle from "./HomeTitle";

const WhySection = () => {
  return (
    <section className="min-h-[40rem] w-full bg-[#eee]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-16 md:flex-row md:px-0 md:py-24">
        {/* Text */}
        <div className="flex flex-col">
          <HomeTitle>Mengapa Bioteknologi?</HomeTitle>
          <div className="mt-8 flex flex-col gap-6">
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
        />
      </div>
    </section>
  );
};

export default WhySection;
