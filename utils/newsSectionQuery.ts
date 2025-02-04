import { generateQuery } from "./generateQuery";

export const getNewsSectionQuery = () => {
  const params = {
    populate: {
      headlineNews: {
        fields: [
          "title",
          "shortDescription",
          "slug",
          "createdAt",
          "publishedAt",
          "type",
        ],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      news1: {
        fields: [
          "title",
          "shortDescription",
          "slug",
          "createdAt",
          "publishedAt",
          "type",
        ],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      news2: {
        fields: [
          "title",
          "shortDescription",
          "slug",
          "createdAt",
          "publishedAt",
          "type",
        ],
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
    },
  };

  return generateQuery(params);
};
