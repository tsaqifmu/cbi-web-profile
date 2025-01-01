import Image from "next/image";

import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <section className="flexCenter">
        <div
          className={`absolute top-1/2 z-10 flex w-full -translate-y-1/3 gap-1 space-y-1 text-white lg:gap-4 lg:space-y-0 xl:max-w-[1312px]`}
        >
          <h1 className="text-[56px] font-normal">
            Solusi Bioteknologi{" "}
            <span className="text-[56px] font-normal">Terintegrasi untuk </span>
            Masa Depan
          </h1>
          <div>
            <p
              className={`w-2/3 text-sm text-slate-200 sm:w-1/2 md:w-96 lg:text-base`}
            >
              Temukan bagaimana solusi bioteknologi kami dapat mengatasi
              permasalahan global di industri pertanian, peternakan, dan
              perikanan.
            </p>
          </div>
        </div>
        <Image
          src={"/Placeholder Lightbox.png"}
          alt={"nama"}
          width={1920}
          height={1080}
          className="h-[30rem] object-cover object-center brightness-50 lg:h-screen"
        />
      </section>
      <section className="h-screen bg-black"></section>
    </>
  );
}
