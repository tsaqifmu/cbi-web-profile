import ContainerSection from "@/components/layout/container";
import React from "react";

const corporateValues = [
  {
    letter: "A",
    value: "manah",
    description: "Terpercaya dalam menjaga hubungan bisnis dengan pelanggan",
  },
  {
    letter: "J",
    value: "ujur",
    description:
      "Transparan dalam membangun hubungan bisnis yang saling menguntungkan",
  },
  {
    letter: "A",
    value: "ntusias",
    description:
      "Secara proaktif memberikan solusi yang terbaik untuk pelanggan",
  },
  {
    letter: "I",
    value: "nformatif",
    description:
      "Selalu memberikan edukasi tentang solusi bioteknologi secara berkelanjutan",
  },
  {
    letter: "B",
    value: "erwawasan",
    description:
      "Terus berkolaborasi dengan berbagai ahli untuk mengembangkan produk yang inovatif dan relevan",
  },
];

const CorporateValue = () => {
  return (
    <ContainerSection>
      <div className="flex w-full flex-col gap-8 md:w-[40%] md:flex-row">
        <h2>
          Corporate <br /> Value
        </h2>

        <div className="bg-red-400 md:w-[60%]">
          {corporateValues.map((value, index) => (
            <div key={index} className="group">
              <div className="flex w-full items-center space-x-4 rounded-lg px-2 py-4 transition-colors group-hover:bg-[#C46617]">
                <div className="flex w-[40%] items-center justify-start">
                  <span className="h-[43px] w-12 text-center text-4xl font-bold text-[#C46617] group-hover:text-[#FBE4D2]">
                    {value.letter}
                  </span>
                  <p className="text-[#222222] group-hover:text-[#FBE4D2]">
                    {value.value}
                  </p>
                </div>
                <div className="w-[60%]">
                  <p className="text-xs text-gray-600 group-hover:text-[#FBE4D2]">
                    {value.description}
                  </p>
                </div>
              </div>
              {index !== corporateValues.length - 1 && (
                <div className="my-2 border border-t border-[#AAAAAA]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </ContainerSection>
  );
};

export default CorporateValue;
