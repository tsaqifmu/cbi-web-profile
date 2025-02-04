import { generateQuery } from "./generateQuery";

export const getArticleDetailQuery = (slug: string) => {
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ["title", "content", "type", "publishedAt"],
    populate: {
      image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
  };

  return generateQuery(params);
};
