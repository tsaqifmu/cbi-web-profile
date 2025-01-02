import HomeTitle from "./HomeTitle";
import LinkGreen from "./LinkGreen";
import ProductCard from "./ProductCard";

const ProductServiceSection = () => {
  return (
    <section className="mx-auto min-h-[40rem] max-w-7xl px-6 py-16 md:px-0 md:py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="flex-1">
          <HomeTitle>Produk dan Layanan</HomeTitle>
        </div>
        <div className="flex max-w-md flex-col gap-5">
          <p className="text-lg text-[#666]">
            Tingkatkan produktivitas anda dengan produk Bioteknologi berkualitas
            tinggi. Jelajahi ragam inovasi bioteknologi terkini dari kami untuk
            berbagai pilihan industri.
          </p>
          <LinkGreen href="/">Selengkapnya</LinkGreen>
        </div>
      </div>

      {/* Images */}
      <div className="mt-14 flex flex-col gap-5 md:flex-row">
        <ProductCard bgUrl="img-product-1.jpeg" title="Pertanian" />
        <ProductCard bgUrl="img-product-2.jpeg" title="Peternakan" />
        <ProductCard bgUrl="img-product-3.jpeg" title="Perikanan" />
      </div>
    </section>
  );
};

export default ProductServiceSection;
