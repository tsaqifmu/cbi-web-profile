export const getImageUrl = (
  imageUrl: string | null | undefined,
  placeholder = "/img-placeholder.png",
): string => {
  return imageUrl
    ? `${process.env.NEXT_PUBLIC_URL_API}${imageUrl}`
    : placeholder;
};
