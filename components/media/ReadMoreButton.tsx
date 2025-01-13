import { ArrowRight } from "lucide-react";

const ReadMoreButton = ({ text = "Selengkapnya" }) => {
  return (
    <button className="mt-5 flex items-center gap-x-2 text-sm font-normal text-[#009933] transition-all hover:-translate-y-1 xl:text-base">
      <span>{text}</span>
      <ArrowRight size={14} />
    </button>
  );
};

export default ReadMoreButton;
