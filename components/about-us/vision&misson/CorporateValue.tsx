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
    <div>
      <h2>Corporate Value</h2>

      <div className="space-y-4">
        {corporateValues.map((value, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 text-xl font-bold text-white">
              {value.letter}
            </div>
            <div>
              <span className="font-medium text-orange-600">{value.value}</span>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateValue;
