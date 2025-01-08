import Image from "next/image";

import ContainerSection from "@/components/layout/container";

const WhySection = () => {
  return (
    <section className="w-full bg-[#eee]">
      <ContainerSection className="flex flex-col items-center justify-between gap-8 md:flex-row xl:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-y-6">
          <h2>Mengapa Kami?</h2>
          <p>
            PT Centra Biotech Indonesia merupakan salah satu perusahaan
            bioteknologi terkemuka di Indonesia. Banyak inovasi produk
            bioteknologi yang kami hasilkan dari riset kami yang menjadi pionir
            dan terbukti dapat membantu industri pertanian, peternakan, dan
            perikanan untuk meningkatkan hasil produktivitasnya.
            <br /> <br />
            Kami berkomitmen untuk terus memberdayakan masa depan Indonesia
            melalui inovasi produk-produk bioteknologi berkualitas tinggi.
            Dibekali dengan pengalaman selama kurang lebih 14 tahun, produk
            bersertifikat, dan didukung oleh sumber daya profesional, kami terus
            berusaha menyediakan produk-produk bioteknologi yang terbaik.
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
