import Image from "next/image";

import DescriptionResponsive from "./DescriptionResponsive";
import TitleResponsive from "./TitleResponsive";

const WhySection = () => {
  return (
    <section className="min-h-[40rem] w-full bg-[#eee]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:py-24 lg:gap-6 lg:px-8 xl:px-0">
        {/* Text */}
        <div className="flex flex-1 flex-col">
          <TitleResponsive>Mengapa Bioteknologi?</TitleResponsive>
          <div className="mt-6 flex flex-col gap-6 text-[#666]">
            <DescriptionResponsive>
              Sektor agribisnis berada di persimpangan kritis. Penurunan
              kualitas lahan, dampak bahan kimia, dan ancaman krisis ekosistem
              memaksa kita untuk mencari solusi baru yang tidak hanya efektif,
              tetapi juga berkelanjutan. Di tengah tantangan ini, bioteknologi
              muncul sebagai terobosan yang menjanjikan transformasi menyeluruh.
            </DescriptionResponsive>
            <DescriptionResponsive>
              Melalui pendekatan ilmiah berbasis mikroba alami, bioteknologi
              memberikan cara baru untuk meningkatkan produktivitas sekaligus
              memperbaiki keseimbangan alam. Ini bukan sekadar inovasi—ini
              adalah langkah visioner untuk memastikan pertanian, peternakan,
              dan perikanan tidak hanya bertahan, tetapi juga berkembang dengan
              cara yang lebih cerdas, efisien, dan selaras dengan masa depan
              bumi.
            </DescriptionResponsive>
          </div>
        </div>

        {/* Image */}
        <Image
          src="/img-why-section.png"
          alt="Petani dan sawah"
          width={626}
          height={406}
          className="h-44 flex-1 rounded-3xl object-cover lg:h-[456px] xl:h-96"
        />
      </div>
    </section>
  );
};

export default WhySection;
