import { generateQuery } from "@/utils/generateQuery";
import { WITH_HEADLINE_QUERY } from "../common";

export const getServicesQuery = () => {
  const params = {
    populate: {
      ...WITH_HEADLINE_QUERY,

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
