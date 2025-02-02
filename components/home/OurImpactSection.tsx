import Image from "next/image";
import { getImageUrl } from "@/utils/image";
import ContainerSection from "../layout/container";
import { OurImpact } from "@/types/responseTypes/dashboard/ourImpact";

// Types
interface ProductBannerProps {
  title: string;
  subtitle: string;
  description: string[];
  imageUrl: string;
  bgImageUrl: string;
  gradientColor: string;
  gradientDirection: "to-r" | "to-l";
  imagePosition: "start" | "end";
}

interface OurImpactSectionProps {
  data: OurImpact;
}

// Constants
const CERTIFICATION_IMAGES = [
  {
    src: "/img-product-cert-1.png",
    alt: "Sertifikat KAN",
    width: 100,
    height: 40,
    className: "h-12 w-24",
  },
  {
    src: "/img-product-cert-2.png",
    alt: "Sertifikat TKDN",
    width: 100,
    height: 40,
    className: "h-12 w-auto",
  },
  {
    src: "/img-product-cert-3.png",
    alt: "Sertifikat Kementrian Pertanian",
    width: 100,
    height: 40,
    className: "h-12 w-auto",
  },
  {
    src: "/img-product-cert-4.png",
    alt: "Sertifikat Organik Indonesia",
    width: 100,
    height: 40,
    className: "h-12 w-auto",
  },
  {
    src: "/img-product-cert-5.png",
    alt: "Sertifikat IAF",
    width: 100,
    height: 40,
    className: "h-12 w-auto",
  },
];

// Components
const ProductBanner = ({
  title,
  subtitle,
  description,
  imageUrl,
  bgImageUrl,
  gradientColor,
  gradientDirection,
  imagePosition,
}: ProductBannerProps) => {
  const Content = () => (
    <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white">
      <div>
        <span className="block text-sm lg:text-base">{subtitle}</span>
        <h1 className="text-2xl font-bold text-[rgba(253,253,253,1)] md:text-4xl">
          {title}
        </h1>
      </div>
      <div className="flex max-w-lg flex-col gap-6">
        {description.map((text, index) => (
          <p
            key={index}
            className="text-sm text-[rgba(253,253,253,1)] lg:text-base"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );

  const ProductImage = () => (
    <div className="flex flex-1 items-end justify-center">
      <Image
        draggable={false}
        src={getImageUrl(imageUrl)}
        alt={title}
        width={700}
        height={397}
        className="h-full w-80 object-cover lg:w-fit"
      />
    </div>
  );

  return (
    <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
      {/* Background with filter */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat contrast-50"
        style={{
          backgroundImage: `url(${getImageUrl(bgImageUrl)})`,
        }}
      />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 z-10 bg-gradient-to-t from-transparent to-[${gradientColor}] to-60% md:bg-gradient-${gradientDirection}`}
      />

      {/* Content */}
      <div className="absolute z-20 flex h-full w-full flex-col-reverse pt-8 md:flex-row md:pt-0">
        {imagePosition === "start" ? (
          <>
            <ProductImage />
            <Content />
          </>
        ) : (
          <>
            <Content />
            <ProductImage />
          </>
        )}
      </div>
    </div>
  );
};

const CertificationSection = () => (
  <div className="mb-4 mt-14 flex flex-col justify-between md:flex-row">
    <p className="max-w-[15rem] font-semibold text-[#222]">
      Produk kami telah memiliki perizinan dan beberapa sertifikat
    </p>
    <div className="mt-6 flex flex-wrap items-center space-x-12 space-y-6 md:mt-0 md:space-y-0">
      {CERTIFICATION_IMAGES.map((cert, index) => (
        <Image
          key={index}
          src={cert.src}
          alt={cert.alt}
          width={cert.width}
          height={cert.height}
          className={cert.className}
        />
      ))}
    </div>
  </div>
);

const OurImpactSection = ({ data }: OurImpactSectionProps) => {
  const biokillerDescription = [
    "Biokiller merupakan insektisida hayati yang dikembangkan oleh PT Centra Biotech Indonesia yang sudah memiliki izin dari Kementerian Pertanian Indonesia.",
    "Produk ini telah terbukti ampuh untuk membunuh hama yang menjadi permasalahan di industri pertanian.",
  ];

  const floraOneDescription = [
    "Pupuk cair pilihan petani Indonesia untuk menjadikan pertanian yang sehat dan produktif. Dipercaya oleh jutaan petani di seluruh Indonesia untuk berbagai jenis tanaman.",
    "FloraOne telah terbukti dapat meningkatkan produktivitas tanaman hingga 50% walaupun dengan pengurangan pupuk kimia sebesar 50%",
  ];

  return (
    <section className="relative overflow-hidden bg-[#EEE]">
      <div className="absolute left-0 top-0 h-[64rem] w-[64rem] -translate-x-[17rem] -translate-y-[26rem]">
        <Image
          draggable={false}
          src="/logo-only.png"
          alt="logo cbi"
          width={600}
          height={600}
          className="h-full w-full object-cover opacity-40 brightness-0 invert"
        />
      </div>

      <ContainerSection className="relative z-20">
        {/* Title */}
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <h1>{data.title}</h1>
          </div>
          <p className="flex-1 text-[#666]">{data.description}</p>
        </div>

        {/* Product Banners */}
        <div className="mt-12 flex flex-col gap-10">
          <ProductBanner
            title="BIOKILLER"
            subtitle="Pelopor Insektisida Hayati Cair di Indonesia"
            description={biokillerDescription}
            imageUrl={data.product1image?.url}
            bgImageUrl={data.product1bgimage?.url}
            gradientColor="#952C1F"
            gradientDirection="to-r"
            imagePosition="start"
          />

          <ProductBanner
            title="FLORAONE"
            subtitle="Pupuk Hayati Cair No.1 di Indonesia"
            description={floraOneDescription}
            imageUrl={data.product2image?.url}
            bgImageUrl={data.product1bgimage?.url}
            gradientColor="#98AF1D"
            gradientDirection="to-l"
            imagePosition="end"
          />
        </div>

        <CertificationSection />
      </ContainerSection>
    </section>
  );
};

export default OurImpactSection;
