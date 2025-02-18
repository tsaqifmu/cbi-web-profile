import { generateQuery } from "@/utils/generateQuery";

export const getServicesQuery = () => {
  const params = {
    populate: {
      headline: {
        fields: "*",
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      aboutSection: "*",
      whySection: {
        populate: {
          why1: {
            populate: "*",
          },
          why2: {
            populate: "*",
          },
          why3: {
            populate: "*",
          },
        },
      },
      productCategoriesSection: {
        populate: {
          product_items: {
            populate: "*",
          },
        },
      },
      bannerContactSection: {
        populate: "*",
      },
    },
  };

  return generateQuery(params);
};
