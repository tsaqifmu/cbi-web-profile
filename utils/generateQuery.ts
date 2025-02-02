import qs from "qs";

export const generateQuery = (params: Record<string, any>) => {
  return qs.stringify(
    { populate: params },
    {
      encodeValuesOnly: true,
    },
  );
};
