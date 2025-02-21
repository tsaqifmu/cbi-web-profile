import ContainerSection from "@/components/layout/container";
import { CorporateValue as CorporateValueProps } from "@/types/responseTypes/aboutUsData";

const CorporateValue = ({
  corporateValueData,
}: {
  corporateValueData: CorporateValueProps;
}) => {
  return (
    <ContainerSection>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <div className="md:w-[40%]">
          <h2>{corporateValueData.title}</h2>
        </div>

        <div className="md:w-[60%]">
          {corporateValueData.corporateValueItem.map((value, index) => (
            <div key={index} className="group">
              <div className="flex w-full items-center space-x-4 rounded-lg px-2 py-4 transition-colors group-hover:bg-[#C46617]">
                <div className="flex w-[40%] items-center justify-start">
                  <span className="h-[2.688rem] w-12 text-center text-4xl font-bold text-[#C46617] group-hover:text-[#FBE4D2] md:h-[3.75rem] md:w-[4.25rem] md:text-5xl">
                    {value.title.charAt(0).toUpperCase()}
                  </span>
                  <p className="text-[#222222] group-hover:text-[#FBE4D2] md:text-xl">
                    {value.title.substring(1).toLocaleLowerCase()}
                  </p>
                </div>
                <div className="w-[60%]">
                  <p className="text-xs text-gray-600 group-hover:text-[#FBE4D2] md:text-base xl:text-lg">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Devider line */}
              {index !== corporateValueData.corporateValueItem.length - 1 && (
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
