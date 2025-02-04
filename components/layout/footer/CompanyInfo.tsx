import Link from "next/link";
import Image from "next/image";

import { SOCIAL_LINKS } from "@/constants/footer";

const SocialLinks = () => (
  <div className="flex gap-4">
    {SOCIAL_LINKS.map(({ icon, href, alt }) => (
      <Link key={alt} href={href} target="_blank">
        <Image
          src={icon}
          height={24}
          width={24}
          alt={alt}
          className="h-6 w-6"
        />
      </Link>
    ))}
  </div>
);

const CompanyInfo = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-8">
        <Image
          src={"/logo-footer.png"}
          alt="logo white"
          width={166}
          height={36}
        />
        <div>
          <h4 className="font-semibold">Alamat</h4>
          <p className="max-w-xs text-sm text-[rgba(253,253,253,1)]">
            Sawahan RT 02 RW 07 Pasungan, Ceper, Klaten Jawa Tengah, Indonesia
            57465
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">Kontak</h4>
          <Link href="https://wa.me/6285183284691" className="underline">
            0851 8328 4691
          </Link>
          <Link href="mailto:centrabioindo@gmail.com" className="underline">
            centrabioindo@gmail.com
          </Link>
        </div>

        <SocialLinks />
      </div>
    </>
  );
};

export default CompanyInfo;
