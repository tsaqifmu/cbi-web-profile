import ContainerSection from "../layout/container";
import LinkGreen from "./LinkGreen";
import ProductCard from "./ProductCard";

const ProductServiceSection = () => {
  return (
    <section>
      <ContainerSection>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex-1">
            <h1>Produk dan Layanan</h1>
          </div>
          <div className="flex max-w-[30rem] flex-col gap-5">
            <p className="text-[#666]">
              Tingkatkan produktivitas anda dengan produk Bioteknologi
              berkualitas tinggi. Jelajahi ragam inovasi bioteknologi terkini
              dari kami untuk berbagai pilihan industri.
            </p>
            <LinkGreen className="mt-2" href="/">
              Selengkapnya
            </LinkGreen>
          </div>
        </div>

        {/* Images */}
        <div className="mt-14 flex flex-col gap-5 md:flex-row">
          <ProductCard
            bgUrl="img-product-1.jpeg"
            title="Pertanian"
            title2="Ingin Maksimalkan Potensi Pertanian Anda?"
            color="#009933"
            color2="#003311"
            url="/product/agriculture"
          />
          <ProductCard
            bgUrl="img-product-2.jpeg"
            title="Peternakan"
            title2="Ingin Maksimalkan Potensi Peternakan Anda?"
            color="#EB7A1C"
            color2="#4E2909"
            url="/product/livestock"
          />
          <ProductCard
            bgUrl="img-product-3.jpeg"
            title="Perikanan"
            title2="Ingin Maksimalkan Potensi Perikanan Anda?"
            color="#1C67AD"
            color2="#09223A"
            url="/product/fishery"
          />
        </div>
      </ContainerSection>
    </section>
  );
};

export default ProductServiceSection;
