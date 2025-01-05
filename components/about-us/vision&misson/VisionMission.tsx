import Image from "next/image";
import React from "react";

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
    image: "/vision-mision/Icon3.png",
    desc: "Mengembalikan kesuburan alami tanah dengan memanfaatkan kekuatan regeneratif mikroba",
  },
  {
    id: 5,
    image: "/vision-mision/Icon4.png",
    desc: "Membangun kolaborasi strategis dengan lembaga penelitian, akademisi, dan pemangku kepentingan lainnya untuk mengembangkan inovasi berkelanjutan",
  },
];

const VisionMission = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        <h1>Visi & Misi Kami</h1>
        <p>
          Mensejahterakan Petani dan Peternak dengan Produk yang Ramah
          Lingkungan dan Berkelanjutan
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {visionContents.map((content) => (
          <div
            key={content.id}
            className="rounded-sm bg-[#FDFDFD] p-6 drop-shadow-sm"
          >
            <Image src={content.image} alt="icon" width={32} height={32} />
            <p className="mt-2">{content.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMission;
