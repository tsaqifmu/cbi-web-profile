import ProductCard from "../home/ProductCard";
import ContainerSection from "../layout/container";
import { getImageUrl } from "@/utils/getImageUrl";
import { Product, ProductsSection } from "@/utils/types";

const OurProductSection = ({ data }: { data: ProductsSection }) => {
  return (
    <section>
      <ContainerSection>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex-1">
            <h1>Produk Kami</h1>
          </div>
        </div>

        {/* Images */}
        <div className="mt-14 flex flex-col gap-5 md:flex-row">
          {data.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              imgUrl={getImageUrl(product?.image?.url)}
              imgAlt={product.image.alternativeText ?? "Product image"}
              title1={product.title}
              title2={product.description}
              color1={`#${product.color1}`}
              color2={`#${product.color2}`}
              url={`/product/${product.url}`}
            />
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default OurProductSection;
