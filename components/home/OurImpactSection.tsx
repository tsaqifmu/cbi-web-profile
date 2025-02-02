import Image from "next/image";
import { getImageUrl } from "@/utils/image";
import { OurImpact } from "@/types/responseTypes/dashboard/ourImpact";
import ContainerSection from "../layout/container";

// Types
interface ProductBannerProps {
  title: string;
  subtitle: string;
  description: string[];
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  backgroundImageUrl: string;
  gradientColor: string;
  gradientDirection: "to-t" | "to-r" | "to-l";
  reverseLayout?: boolean;
}

interface CertificateImageProps {
  src: string;
  alt: string;
}

// Constants
const CERTIFICATES: CertificateImageProps[] = [
  {
    src: "/img-product-cert-1.png",
    alt: "Sertifikat KAN",
  },
  {
    src: "/img-product-cert-2.png",
    alt: "Sertifikat TKDN",
  },
  {
    src: "/img-product-cert-3.png",
    alt: "Sertifikat Kementrian Pertanian",
  },
  {
    src: "/img-product-cert-4.png",
    alt: "Sertifikat Organik Indonesia",
  },
  {
    src: "/img-product-cert-5.png",
    alt: "Sertifikat IAF",
  },
];

// Components
const ProductBanner = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  backgroundImageUrl,
  gradientColor,
  gradientDirection,
  reverseLayout = false,
}: ProductBannerProps) => {
  const ContentSection = () => (
    <div className="flex flex-1 flex-col justify-center gap-6 px-6 leading-6 text-white">
      <div>
        <span className="block text-sm lg:text-base">{subtitle}</span>
        <h2 className="text-2xl font-bold text-[rgba(253,253,253,1)] md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="flex max-w-lg flex-col gap-6">
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm text-[rgba(253,253,253,1)] lg:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="flex flex-1 items-end justify-center">
      <Image
        draggable={false}
        src={imageUrl}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="h-full w-80 object-cover lg:w-fit"
      />
    </div>
  );

  return (
    <div className="relative min-h-[35rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat contrast-50"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      />
      <div
        className={`absolute inset-0 z-10 bg-gradient-${gradientDirection} from-transparent to-[${gradientColor}] to-60% md:bg-gradient-${gradientDirection}`}
      />
      <div className="absolute z-20 flex h-full w-full flex-col-reverse pt-8 md:flex-row md:pt-0">
        {reverseLayout ? (
          <>
            <ContentSection />
            <ImageSection />
          </>
        ) : (
          <>
            <ImageSection />
            <ContentSection />
          </>
        )}
      </div>
    </div>
  );
};

const CertificatesSection = () => (
  <div className="mb-4 mt-14 flex flex-col justify-between md:flex-row">
    <p className="max-w-[15rem] font-semibold text-[#222]">
      Produk kami telah memiliki perizinan dan beberapa sertifikat
    </p>
    <div className="mt-6 flex flex-wrap items-center space-x-12 space-y-6 md:mt-0 md:space-y-0">
      {CERTIFICATES.map((cert) => (
        <Image
          key={cert.alt}
          src={cert.src}
          alt={cert.alt}
          width={100}
          height={40}
          className="h-12 w-auto"
        />
      ))}
    </div>
  </div>
);

// Main Component
const OurImpactSection = ({ data }: { data: OurImpact }) => {
  const backgroundLogoSection = (
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
  );

  const headerSection = (
    <div className="flex flex-col justify-between gap-6 md:flex-row">
      <div className="flex-1">
        <h1>{data.title}</h1>
      </div>
      <p className="flex-1 text-[#666]">{data.description}</p>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#EEE]">
      {backgroundLogoSection}

      <ContainerSection className="relative z-20">
        {headerSection}

        <div className="mt-12 flex flex-col gap-10">
          <ProductBanner
            title="BIOKILLER"
            subtitle="Pelopor Insektisida Hayati Cair di Indonesia"
            description={[
              "Biokiller merupakan insektisida hayati yang dikembangkan oleh PT Centra Biotech Indonesia yang sudah memiliki izin dari Kementerian Pertanian Indonesia.",
              "Produk ini telah terbukti ampuh untuk membunuh hama yang menjadi permasalahan di industri pertanian.",
            ]}
            imageUrl={getImageUrl(data.product1image?.url)}
            imageAlt={data.product1image.alternativeText ?? "image product 1"}
            imageWidth={700}
            imageHeight={397}
            backgroundImageUrl={getImageUrl(data.product1bgimage?.url)}
            gradientColor="#952C1F"
            gradientDirection="to-r"
          />

          <ProductBanner
            title="FLORAONE"
            subtitle="Pupuk Hayati Cair No.1 di Indonesia"
            description={[
              "Pupuk cair pilihan petani Indonesia untuk menjadikan pertanian yang sehat dan produktif. Dipercaya oleh jutaan petani di seluruh Indonesia untuk berbagai jenis tanaman.",
              "FloraOne telah terbukti dapat meningkatkan produktivitas tanaman hingga 50% walaupun dengan pengurangan pupuk kimia sebesar 50%",
            ]}
            imageUrl={getImageUrl(data.product2image?.url)}
            imageAlt={data.product2image.alternativeText ?? "Product Image"}
            imageWidth={data.product2image.width}
            imageHeight={data.product2image.height}
            backgroundImageUrl={getImageUrl(data.product1bgimage?.url)}
            gradientColor="#98AF1D"
            gradientDirection="to-l"
            reverseLayout={true}
          />
        </div>

        <CertificatesSection />
      </ContainerSection>
    </section>
  );
};

export default OurImpactSection;
