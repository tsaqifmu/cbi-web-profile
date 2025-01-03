import Image from 'next/image';
import Link from 'next/link';

import Facebook from '@/public/Facebook.svg';
import Instagram from '@/public/Instagram.svg';
import LinkedIn from '@/public/LinkedIn.svg';
import Youtube from '@/public/Youtube.svg';

const Footer = () => {
  return (
    <footer className="relative min-h-[36rem] w-full overflow-hidden bg-[#083F19] px-6 py-12 text-[#FDFDFD] md:px-20 md:pb-12 md:pt-24">
      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-10 opacity-100 md:opacity-70"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />

      {/* Radial gradient light top left 1*/}
      <div
        className="absolute right-0 top-14 z-10 hidden h-[60rem] w-[60rem] -translate-y-1/2 translate-x-1/2 opacity-100 md:-left-[45rem] md:top-0 md:block md:opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(7,162,60,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Radial gradient light top left 2*/}
      <div
        className="absolute right-0 top-14 z-10 h-[60rem] w-[60rem] -translate-y-1/2 translate-x-1/2 opacity-100 md:-left-[30rem] md:top-0 md:opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(7,162,60,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Radial gradient light bottom right */}
      <div
        className="absolute bottom-0 right-0 z-10 hidden h-[150rem] w-[150rem] translate-x-1/2 translate-y-1/2 opacity-90 md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(7,162,60,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Image */}
      <Image
        draggable={false}
        style={{ userSelect: "none", WebkitUserSelect: "none" }}
        src="/logo-only.png"
        alt="logo"
        width={996}
        height={944}
        className="absolute bottom-0 right-0 z-10 w-[120rem] translate-x-1/2 translate-y-1/2 opacity-10 mix-blend-color-dodge md:translate-x-[30rem]"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mx-auto flex flex-col md:flex-row">
          {/* Left */}
          <div className="flex flex-1 flex-col gap-8">
            <Image
              src={"/logo-footer.png"}
              alt="logo white"
              width={166}
              height={36}
            />
            <div>
              <h2 className="font-semibold">Alamat</h2>
              <p className="max-w-sm">
                Sawahan RT 02 RW 07 Pasungan, Ceper, Klaten Jawa Tengah,
                Indonesia 57465
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">Kontak</h2>
              <Link href="https://wa.me/6285183284691" className="underline">
                0851 8328 4691
              </Link>
              <Link href="mailto:centrabioindo@gmail.com" className="underline">
                centrabioindo@gmail.com
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="/">
                <Image src={Facebook} alt="facebook" className="h-6 w-6" />
              </Link>
              <Link href="/">
                <Image src={Instagram} alt="instagram" className="h-6 w-6" />
              </Link>
              <Link href="/">
                <Image src={LinkedIn} alt="linkedin" className="h-6 w-6" />
              </Link>
              <Link href="/">
                <Image src={Youtube} alt="youtube" className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="mt-8 flex flex-1 flex-row gap-14 md:me-16 md:mt-0 md:justify-end md:gap-36">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Perusahaan</h2>
              <Link className="hover:underline" href="/">
                Tentang Kami
              </Link>
              <Link className="hover:underline" href="/">
                Media & Informasi
              </Link>
              <Link className="hover:underline" href="/">
                Karir
              </Link>
              <Link className="hover:underline" href="/">
                Hubungi Kami
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-bold">Produk & Layanan</h2>
              <Link className="hover:underline" href="/">
                Pertanian{" "}
              </Link>
              <Link className="hover:underline" href="/">
                Peternakan{" "}
              </Link>
              <Link className="hover:underline" href="/">
                Perikanan
              </Link>
              <Link className="hover:underline" href="/">
                Dokter Tani{" "}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mb-8 mt-16 md:mt-24">
          <hr />
          <div className="mt-6 flex flex-col-reverse justify-between text-sm md:flex-row md:text-base">
            <p className="mt-4 md:mt-0">
              © 2024 PT Centra Biotech Indonesia. All rights reserved.
            </p>
            <div className="flex items-center justify-between md:gap-8">
              <Link href="/" className="underline">
                Privacy Policy
              </Link>
              <Link href="/" className="underline">
                Terms of Service
              </Link>
              <Link href="/" className="underline">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
