import { getImageUrl } from "@/utils/image";

import {
  Product,
  ProductService,
} from "@/types/responseTypes/dashboard/productService";

import LinkGreen from "./LinkGreen";
import ProductCard from "./ProductCard";
import ContainerSection from "../layout/container";

const ProductServiceSection = ({ data }: { data: ProductService }) => {
  return (
    <section>
      <ContainerSection>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="flex-1">
            <h1>{data.title}</h1>
          </div>
          <div className="flex max-w-[30rem] flex-col gap-5">
            <p className="text-[#666]">{data.description}</p>
            <LinkGreen className="mt-2" href="/">
              Selengkapnya
            </LinkGreen>
          </div>
        </div>

        {/* Images */}
        <div className="mt-14 flex flex-col gap-5 md:flex-row">
          {data.products?.map((product: Product) => (
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

export default ProductServiceSection;
