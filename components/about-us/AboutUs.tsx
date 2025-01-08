import { FC } from "react";
import Image from "next/image";

import ContainerSection from "@/components/layout/container";

const AboutUsSection: FC = () => {
  return (
    <section>
      <ContainerSection className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-x-52">
          <h2 className="text-nowrap">Tentang Kami</h2>
          <p>
            PT Centra Biotech Indonesia merupakan perusahaan nasional yang
            memproduksi dan memasarkan produk-produk bioteknologi ramah
            lingkungan dengan basis mikroba khusus sebagai komposisi utama. Kami
            menyediakan produk bioteknologi pada bidang pertanian yang mencakup
            berbagai macam produk spesifik untuk menunjang kesehatan dan
            produktivitas tanaman.
            <br /> <br />
            Perusahaan Centra Biotech Indonesia telah berdiri sejak tanggal 10
            Februari 2010 dan mendapatkan pengesahan dari Menteri Kehakiman dan
            Hak Asasi Manusia Republik Indonesia dengan nomor :
            AHU-20782.AH.01.01.Tahun 2010
            <br /> <br />
            Centra Biotech Indonesia dengan tenaga–tenaga ahli di bidang
            mikrobiologi selalu berkreasi dan berinovasi untuk menghadirkan
            produk-produk dengan bahan-bahan alami pilihan agar dan terbaik
            untuk memberikan produk yang berkualitas, dan bermanfaat bagi
            petani.
          </p>
        </div>
        <Image
          src={"/about-us.png"}
          alt="about us photo"
          width={1312}
          height={400}
          className="h-60 rounded-2xl object-cover object-center lg:h-[25rem]"
        />
      </ContainerSection>
    </section>
  );
};

export default AboutUsSection;
