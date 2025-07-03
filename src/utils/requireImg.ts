// @ts-ignore
const images = import.meta.glob("/src/assets/*", { eager: true, as: "url" });
// @ts-ignore
const folderImages = import.meta.glob("/src/assets/**/**/*", {
  eager: true,
  as: "url"
});
const allImages = { ...images, ...folderImages };
export const requireImg = (imgPath: string) => {
  return allImages[`/src/assets/${imgPath}`];
};
