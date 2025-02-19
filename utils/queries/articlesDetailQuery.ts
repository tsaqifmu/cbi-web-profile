import { generateQuery } from "../generateQuery";
import { IMAGE_QUERY } from "./common";

export const getArticleDetailQuery = (slug: string) => {
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    fields: ["title", "content", "type", "publishedAt"],
    populate: {
      ...IMAGE_QUERY,
    },
  };

  return generateQuery(params);
};
