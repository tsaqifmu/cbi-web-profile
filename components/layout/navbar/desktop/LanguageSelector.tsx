import { FC } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const LanguageSelector: FC = () => (
  <button
    className="flex items-center gap-x-1 transition-transform hover:scale-105"
    aria-label="Select language"
  >
    <Image
      src="/Indonesia.svg"
      alt="Indonesian language"
      width={24}
      height={24}
    />
    <ChevronDown className="h-4 w-4" />
  </button>
);
