import { generateQuery } from "../generateQuery";
import { IMAGE_QUERY } from "./common";

export const getDashboardQuery = () => {
  const params = {
    populate: {
      headline: {
        populate: "*",
      },
      whySection: {
        populate: {
          ...IMAGE_QUERY,
        },
      },
      productService: {
        populate: {
          products: {
            populate: {
              ...IMAGE_QUERY,
            },
          },
        },
      },
      ourImpact: {
        populate: {
          product1image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          product1bgimage: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          product2image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
          product2bgimage: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      latestNews: {
        populate: {
          blogs: {
            fields: [
              "title",
              "shortDescription",
              "slug",
              "createdAt",
              "publishedAt",
              "type",
            ],
            populate: {
              ...IMAGE_QUERY,
            },
          },
          news: {
            fields: [
              "title",
              "shortDescription",
              "slug",
              "createdAt",
              "publishedAt",
              "type",
            ],
            populate: {
              ...IMAGE_QUERY,
            },
          },
        },
      },
      bannerContact: {
        populate: {
          ...IMAGE_QUERY,
        },
      },
    },
  };

  return generateQuery(params);
};
