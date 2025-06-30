export const requireImg = (imgPath: string) => {
  const imgSrc = `/src/assets/${imgPath}`;
  return new URL(imgSrc, import.meta.url).href;
};
