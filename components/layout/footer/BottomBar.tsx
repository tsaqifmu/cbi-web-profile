import Link from "next/link";
import { LEGAL_LINKS } from "@/constants/footer";

const BottomBar = () => {
  return (
    <div className="mb-8 mt-16 text-xs md:mt-24 lg:text-sm">
      <hr />
      <div className="mt-8 flex flex-col-reverse justify-between md:flex-row">
        <p className="mt-6 text-xs text-[rgba(253,253,253,1)] lg:mt-0 lg:text-sm">
          © {new Date().getFullYear()} PT Centra Biotech Indonesia. All rights
          reserved.
        </p>
        <div className="flex items-center gap-6 lg:gap-8">
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} className="underline">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
