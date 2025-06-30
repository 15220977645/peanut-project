/* RequestAnimationFrame处理动画，适合复杂的动画加载 */
export const timerForRequestAnimationFrame = (animationId, fun) => {
  let lastTime = performance.now();
  const animationFun = () => {
    const currentTime = performance.now();
    if (currentTime - lastTime >= 2000) {
      fun();
      // 更新lastTime为当前时间
      lastTime = currentTime;
    }
    // 继续动画循环
    animationId = requestAnimationFrame(animationFun);
  };
  // 清除之前的动画
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
  // 启动新的动画
  animationId = requestAnimationFrame(animationFun);
};

/* setTimeout处理动画，适合简单、直接，对时间准确度高的场景 */
export const timerForSetTimeout = (timerAnimation, fun) => {
  const animationFun = () => {
    if (timerAnimation) {
      clearTimeout(timerAnimation);
      timerAnimation = null;
    }
    fun();
    // 设置下一次动画
    timerAnimation = setTimeout(animationFun, 2000);
  };
  if (timerAnimation) {
    clearTimeout(timerAnimation);
    timerAnimation = null;
  }
  timerAnimation = setTimeout(animationFun, 2000);
};
