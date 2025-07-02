// export const requireImg = (imgPath: string) => {
//   const imgSrc = `/src/assets/${imgPath}`;
//   return new URL(imgSrc, import.meta.url).href;
// };
// @ts-ignore
const images = import.meta.glob("/src/assets/*", { eager: true, as: "url" });

export const requireImg = (imgPath: string) => {
  return images[`/src/assets/${imgPath}`];
};
