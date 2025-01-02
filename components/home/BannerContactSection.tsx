import LinkGreen from "./LinkGreen";

const BannerContactSection = () => {
  return (
    <section className="bg-[#EEE]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-0 md:py-24">
        <div className="relative min-h-[25rem] w-full overflow-hidden rounded-3xl bg-cover bg-bottom bg-no-repeat md:min-h-[25rem]">
          {/* Background dengan filter */}
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat contrast-50"
            style={{
              backgroundImage: "url(img-contact-banner-bg.png)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-[#171717]/80" />

          {/* Konten */}
          <div className="absolute z-20 flex h-full w-full flex-col items-start justify-between px-10 py-10 md:flex-row md:items-center md:px-24">
            <div className="flex max-w-lg flex-1 items-center">
              <h1 className="text-4xl leading-snug text-white">
                Dapatkan
                <br />
                <span className="font-bold">solusi Bioteknologi</span>
                <br />
                sesuai
                <span className="font-bold"> kebutuhan Anda</span>
              </h1>
            </div>
            <div className="mt-4 flex flex-1 items-center justify-end md:me-24 md:mt-0">
              <LinkGreen href="/">Hubungi Kami</LinkGreen>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerContactSection;
