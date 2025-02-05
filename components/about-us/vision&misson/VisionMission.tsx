import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import ContainerSection from "@/components/layout/container";

const visionContents = [
  {
    id: 1,
    image: "/vision-mision/Icon1.png",
    desc: "Mengembangkan inovasi produk yang unggul dan memberikan solusi nyata bagi kebutuhan petani",
  },
  {
    id: 2,
    image: "/vision-mision/Icon2.png",
    desc: "Menyediakan layanan end-to-end untuk mengatasi tantangan yang dihadapi petani",
  },
  {
    id: 3,
    image: "/vision-mision/Icon3.png",
    desc: "Mengoptimalkan proses produksi rendah emisi untuk menjaga keseimbangan lingkungan",
  },
  {
    id: 4,
    image: "/vision-mision/Icon4.png",
    desc: "Mengembalikan kesuburan alami tanah dengan memanfaatkan kekuatan regeneratif mikroba",
  },
  {
    id: 5,
    image: "/vision-mision/Icon5.png",
    desc: "Membangun kolaborasi strategis dengan lembaga penelitian, akademisi, dan pemangku kepentingan lainnya untuk mengembangkan inovasi berkelanjutan",
  },
];

const VisionMission = () => {
  return (
    <ContainerSection>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="space-y-6 md:w-[40%]">
          <h2>
            Visi & Misi <br /> Kami
          </h2>
          <p className="max-w-96">
            Mensejahterakan Petani dan Peternak dengan Produk yang Ramah
            Lingkungan dan Berkelanjutan
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:w-[60%] xl:grid-cols-2">
          {visionContents.map((content, index) => (
            <div
              key={content.id}
              className={cn(
                "rounded-sm bg-[#FDFDFD] p-6 drop-shadow-sm md:rounded-lg",
                index === visionContents.length - 1 && "xl:col-span-2",
              )}
            >
              <Image
                src={content.image}
                alt="icon"
                width={32}
                height={32}
                className="h-8 w-8 md:h-12 md:w-12"
              />
              <p className="mt-2">{content.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ContainerSection>
  );
};

export default VisionMission;
