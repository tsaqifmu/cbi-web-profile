import Link from "next/link";

import HomeTitle from "./HomeTitle";

const ProductServiceSection = () => {
  return (
    <section className="mx-auto min-h-[40rem] max-w-7xl">
      <div className="flex flex-col justify-between gap-6 px-6 py-16 md:flex-row md:px-0 md:py-24">
        <div className="flex-1">
          <HomeTitle>Produk dan Layanan</HomeTitle>
        </div>
        <div className="flex-1">
          <p>
            Tingkatkan produktivitas anda dengan produk Bioteknologi berkualitas
            tinggi. Jelajahi ragam inovasi bioteknologi terkini dari kami untuk
            berbagai pilihan industri.
          </p>
          <Link href={""}>Selengkapnya</Link>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-col gap-6 md:flex-row"></div>
    </section>
  );
};

export default ProductServiceSection;
