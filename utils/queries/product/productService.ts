import { generateQuery } from "@/utils/generateQuery";

export const getProductServiceQuery = () => {
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
      whySection: {
        populate: '*'
      },
      productsSection: {
        populate: {
          products: {
            populate: '*'
          }
        }
      },
      servicesSection: {
        populate: {
          services: {
            populate: '*'
          }
        }
      },
      bannerContactSection: {
        populate: '*'
      }
    },
  };

  return generateQuery(params);
};
