const s = r => {
  const e = `/src/assets/${r}`;
  return new URL(e, import.meta.url).href;
};
export { s as r };
