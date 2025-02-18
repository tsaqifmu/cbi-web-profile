import { generateQuery } from "../generateQuery";

export const getAboutUsQuery = () => {
  const params = {
    populate: {
      headline: {
        populate: "*",
      },
      aboutUs: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      visionMission: {
        populate: "*",
      },
      corporateValue: {
        populate: "*",
      },
      managements: {
        fields: ["name", "position", "description", "createdAt", "publishedAt"],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      careerBanner: {
        populate: "*",
      },
    },
  };

  return generateQuery(params);
};
