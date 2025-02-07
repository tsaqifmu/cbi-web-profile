import { generateQuery } from "./generateQuery";

export const getNewsSectionQuery = () => {
  const params = {
    populate: {
      headline: {
        populate: "*",
      },
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
      bannerContactSection: {
        fields: ["title", "ctaText"],
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
