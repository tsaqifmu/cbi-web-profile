import React from "react";
import ContainerSection from "../layout/container";
import Image from "next/image";

const ManagementSection = () => {
  return (
    <section>
      <ContainerSection>
        <h1>Manajemen</h1>

        {/* card */}
        <Image
          src={"/management-photo-profile/pak-luhur.png"}
          alt="pak luhur photo"
          width={400}
          height={400}
          className="h-[18.75rem] w-[18.75rem] rounded-[1.125rem] object-cover object-center"
        />
      </ContainerSection>
    </section>
  );
};

export default ManagementSection;
