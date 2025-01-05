import Image from "next/image";

import ContainerSection from "@/components/layout/container";

const WhySection = () => {
  return (
    <section className="w-full bg-[#eee]">
      <ContainerSection className="flex flex-col items-center justify-between gap-8 md:flex-row xl:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-y-6">
          <h2>Mengapa Bioteknologi?</h2>
          <p>
            Sektor agribisnis berada di persimpangan kritis. Penurunan kualitas
            lahan, dampak bahan kimia, dan ancaman krisis ekosistem memaksa kita
            untuk mencari solusi baru yang tidak hanya efektif, tetapi juga
            berkelanjutan. Di tengah tantangan ini, bioteknologi muncul sebagai
            terobosan yang menjanjikan transformasi menyeluruh.
            <br /> <br />
            Melalui pendekatan ilmiah berbasis mikroba alami, bioteknologi
            memberikan cara baru untuk meningkatkan produktivitas sekaligus
            memperbaiki keseimbangan alam. Ini bukan sekadar inovasi—ini adalah
            langkah visioner untuk memastikan pertanian, peternakan, dan
            perikanan tidak hanya bertahan, tetapi juga berkembang dengan cara
            yang lebih cerdas, efisien, dan selaras dengan masa depan bumi.
          </p>
        </div>

        {/* Image */}
        <Image
          src="/img-why-section.png"
          alt="Petani dan sawah"
          width={626}
          height={406}
          className="h-44 flex-1 rounded-3xl object-cover md:h-[356px] lg:h-[456px] xl:h-96"
        />
      </ContainerSection>
    </section>
  );
};

export default WhySection;
