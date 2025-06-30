/* 处理字体滑动 */
export function handleSlideFont(): void {
  const slideFontDoms: any = document.getElementsByClassName("animation-font");
  Array.from(slideFontDoms).forEach((element: any) => {
    const containerWidth = element.offsetWidth;
    const animationFontDom = element.getElementsByClassName(
      "animation-content"
    )[0] as HTMLElement;
    const fontWidth = animationFontDom.offsetWidth;
    if (fontWidth > containerWidth) {
      animationFontDom.classList.add("go-animation");
    }
  });
}
