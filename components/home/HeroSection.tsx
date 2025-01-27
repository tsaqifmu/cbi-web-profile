import { ApiPath, apiRequest } from "@/utils/apiClient";
import LinkGreen from "./LinkGreen";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-500"
    >
      <source src="/cbi-video-profile.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const HeroTitle = () => {
  return (
    <div className="w-fit">
      <h1 className="text-[#FDFDFD]">
        Solusi <br /> Bioteknologi
        <span className="font-normal"> Terintegrasi</span>
        <span className="block xl:mt-2">
          <span className="font-normal">untuk</span>
          <span> Masa Depan</span>
        </span>
      </h1>
    </div>
  );
};

const HeroDescription = () => {
  return (
    <div className="flex flex-col gap-6 lg:w-[23.75rem] xl:w-[31.25rem]">
      <p className="text-[#FDFDFD]">
        Temukan bagaimana solusi bioteknologi kami dapat mengatasi permasalahan
        global di industri pertanian, peternakan, dan perikanan.
      </p>

      <LinkGreen href="/">Info Selengkapnya</LinkGreen>
    </div>
  );
};

const HeroSection = async () => {
  const { data } = await apiRequest({
    path: ApiPath.DASHBOARD,
    queryParams: { "populate[whySection][populate]": "image" },
  });

  console.log(data);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <BackgroundVideo />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Multi-step Blur Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 backdrop-blur-lg [mask:linear-gradient(transparent,white,white)]" />

      {/* Main Content*/}
      <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-full max-w-7xl -translate-x-1/2 flex-col items-end gap-4 px-6 pb-24 md:flex-row md:justify-between lg:px-8 xl:px-0">
        <HeroTitle />
        <HeroDescription />
      </div>
    </section>
  );
};

export default HeroSection;
