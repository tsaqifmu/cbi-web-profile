import { generateQuery } from "./generateQuery";

export const getDashboardQuery = () => {
  const params = {
    populate: {
      headline: {
        populate: "*",
      },
      whySection: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "width", "height"],
          },
        },
      },
      productService: {
        populate: {
          products: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "width", "height"],
              },
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
              image: {
                fields: ["url", "alternativeText", "width", "height"],
              },
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
              image: {
                fields: ["url", "alternativeText", "width", "height"],
              },
            },
          },
        },
      },
      bannerContact: {
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
