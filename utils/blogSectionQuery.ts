import { generateQuery } from "./generateQuery";

export const getBlogSectionQuery = () => {
  const params = {
    populate: {
      headlineBlog: {
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
      blog1: {
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
      blog2: {
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
