import { FC } from "react";
import Link from "next/link";

import {
  COMPANY_LINKS,
  NavigationLink,
  PRODUCT_LINKS,
} from "@/constants/footer";

interface LinkSectionProps {
  title: string;
  links: NavigationLink[];
  target?: string;
}

// Components
const LinkSection: FC<LinkSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-bold">{title}</h4>
    {links.map(({ label, href, target }) => (
      <Link key={label} className="hover:underline" href={href} target={target}>
        {label}
      </Link>
    ))}
  </div>
);

const NavigationLinks: FC = () => {
  return (
    <div className="mt-8 flex flex-1 flex-row gap-14 md:me-16 md:mt-0 md:justify-end md:gap-36">
      <LinkSection title="Perusahaan" links={COMPANY_LINKS} />
      <LinkSection title="Produk & Layanan" links={PRODUCT_LINKS} />
    </div>
  );
};

export default NavigationLinks;
