import HeroSectionCareer from "@/components/career/HeroSection";
import JobVacany from "@/components/career/JobVacany";
import JoinUs from "@/components/career/JoinUs";
import Testimony from "@/components/career/Testimony";
import Breadcrumb from "@/components/common/BreadScrumb";

const Career = () => {
  return (
    <section>
      <HeroSectionCareer />
      <Breadcrumb className="bg-[#EEE]" />
      <JoinUs />
      <Testimony />
      <JobVacany />
    </section>
  );
};

export default Career;
