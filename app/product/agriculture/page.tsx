import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import ContainerSection from "@/components/layout/container";
import AgricultureProductsSection from "@/components/product/agriculture/AgricultureProductsSection";
import BannerContactSection from "@/components/product/agriculture/BannerContactSection";

const whyData = [
  {
    id: 1,
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#C46617] group-hover:text-white lg:h-12 lg:w-12"
      >
        <path
          d="M40 26V16H30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16L30 26C28.234 27.766 27.352 28.648 26.27 28.746C26.09 28.762 25.91 28.762 25.73 28.746C24.648 28.646 23.766 27.766 22 26C20.234 24.234 19.352 23.352 18.27 23.254C18.0904 23.2378 17.9096 23.2378 17.73 23.254C16.648 23.354 15.766 24.234 14 26L8 32"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Berpengalaman lebih dari 14 tahun menyediakan berbagai solusi pertanian ramah lingkungan, salah satunya adalah pupuk hayati",
  },
  {
    id: 2,
    icon: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#C46617] group-hover:text-white lg:h-12 lg:w-12"
      >
        <g clip-path="url(#clip0_1007_12733)">
          <path
            d="M2.56152 40.0923V27.6809L13.4198 23.0283L24.2781 27.6843V40.0923L13.4198 44.7415L2.56152 40.0923Z"
            stroke="currentColor"
            stroke-width="3.42857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.56152 27.6555L13.4198 32.308L24.2781 27.6555M13.4198 10.7012L24.2747 15.3572L35.133 10.7046"
            stroke="currentColor"
            stroke-width="3.42857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.2744 27.6562L35.1327 32.3088L45.991 27.6562"
            stroke="currentColor"
            stroke-width="3.42857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4199 32.3159V44.7445M35.1399 32.3159V44.7445M24.2748 15.3582V27.7833M13.4268 23.021V10.6096L24.2816 5.95703L35.1399 10.6096V23.021L24.2816 27.6736L13.4268 23.021ZM24.2748 40.0919V27.6805L35.1331 23.0279L45.9914 27.6839V40.0919L35.1331 44.741L24.2748 40.0919Z"
            stroke="currentColor"
            stroke-width="3.42857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1007_12733">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(0.333008)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    description:
      "Produk probiotik yang kami hasilkan telah digunakan oleh para peternak untuk menjaga kesehatan ternak agar produktivitas meningkat.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#C46617] group-hover:text-white lg:h-12 lg:w-12"
      >
        <path
          d="M42.667 28H30.667C30.1366 28 29.6279 27.7893 29.2528 27.4142C28.8777 27.0391 28.667 26.5304 28.667 26C28.667 25.4696 28.8777 24.9609 29.2528 24.5858C29.6279 24.2107 30.1366 24 30.667 24H42.667C43.1974 24 43.7061 24.2107 44.0812 24.5858C44.4563 24.9609 44.667 25.4696 44.667 26C44.667 26.5304 44.4563 27.0391 44.0812 27.4142C43.7061 27.7893 43.1974 28 42.667 28ZM36.667 34C36.1366 34 35.6278 33.7893 35.2528 33.4142C34.8777 33.0391 34.667 32.5304 34.667 32V20C34.667 19.4696 34.8777 18.9609 35.2528 18.5858C35.6278 18.2107 36.1366 18 36.667 18C37.1974 18 37.7061 18.2107 38.0812 18.5858C38.4563 18.9609 38.667 19.4696 38.667 20V32C38.667 32.5304 38.4563 33.0391 38.0812 33.4142C37.7061 33.7893 37.1974 34 36.667 34ZM18.667 12C21.975 12 24.667 14.692 24.667 18C24.667 21.308 21.975 24 18.667 24C15.359 24 12.667 21.308 12.667 18C12.667 14.692 15.359 12 18.667 12ZM18.667 8C13.139 8 8.66699 12.476 8.66699 18C8.66699 23.524 13.139 28 18.667 28C24.195 28 28.667 23.524 28.667 18C28.667 12.476 24.195 8 18.667 8ZM18.667 34C22.709 34 25.269 35.542 26.233 36.89C24.867 37.41 22.295 38 18.667 38C14.699 38 12.255 37.39 11.031 36.916C11.949 35.486 14.585 34 18.667 34ZM18.667 30C11.167 30 6.66699 34 6.66699 38C6.66699 40 11.167 42 18.667 42C25.703 42 30.667 40 30.667 38C30.667 34 25.959 30 18.667 30Z"
          fill="currentColor"
        />
      </svg>
    ),
    description:
      "Didukung oleh tim ahli peternakan yang secara terus menerus melakukan riset pengembangan untuk menghasilkan inovasi produk berkualitas tinggi.",
  },
];

const Agriculture = () => {
  return (
    <>
      <HeroSectionGeneral
        imgUrl="/img-agriculture-hero.png"
        category="Pertanian"
        title={
          <h1 className="p-4 text-center text-3xl font-bold !leading-tight text-white lg:text-5xl xl:text-[56px]">
            Tingkatkan <br className="md:hidden" />
            Hasil Panen{" "}
            <span className="font-normal">
              Anda dengan <br className="md:hidden" />
            </span>
            Produk Bioteknologi Berkualitas Tinggi
          </h1>
        }
      />

      <section className="bg-[#F4F4F4]">
        <ContainerSection>
          <div className="flex flex-col gap-6 rounded-3xl bg-[#00802B] p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-16">
            <h1 className="text-3xl text-white lg:text-[40px] xl:w-[46rem] xl:text-5xl">
              Tentang <br />
              Produk Pertanian
            </h1>
            <p className="w-fit text-white">
              Produk Pertanian merupakan salah satu solusi yang kami hadirkan
              untuk membantu industri pertanian dalam meningkatkan kualitas dan
              kuantitas hasil panen. Dengan dukungan riset yang berkelanjutan
              oleh tim profesional di bidang pertanian, banyak produk-produk
              berkualitas yang kami hasilkan dan terbukti dapat membantu dalam
              mengatasi berbagai tantangan.
            </p>
          </div>
        </ContainerSection>
      </section>

      <section>
        <ContainerSection>
          <div>
            <h1>
              Mengapa memilih <br />
              Produk Pertanian kami?
            </h1>
            <div className="mt-8 flex flex-col gap-8 lg:mt-24 lg:flex-row">
              {whyData.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col rounded-lg px-8 py-12 shadow-md transition duration-300 hover:bg-[#C46617]"
                >
                  {item.icon}
                  <p className="mt-8 text-sm text-[#666] !transition-none group-hover:text-white lg:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContainerSection>
      </section>

      <AgricultureProductsSection />

      <BannerContactSection />
    </>
  );
};

export default Agriculture;
