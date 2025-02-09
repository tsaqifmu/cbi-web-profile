import { generateQuery } from "../generateQuery";

export const getDocumentsQuery = () => {
  const params = {
    populate: {
      headline: {
        populate: "*",
      },
      certificates: {
        fields: ["title", "description", "publishedAt"],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          file: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      brochures: {
        fields: ["title", "description", "publishedAt"],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          file: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
    },
  };

  return generateQuery(params);
};
