export const IMAGE_QUERY = {
  image: {
    fields: ["url", "alternativeText", "width", "height"],
  },
};

export const WITH_HEADLINE_QUERY = {
  headline: {
    fields: "*",
    populate: {
      ...IMAGE_QUERY,
    },
  },
};
