import { generateQuery } from "../generateQuery";

export const getArticlesCollectionQuery = () => {
  const params = {
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
  };

  return generateQuery(params);
};
