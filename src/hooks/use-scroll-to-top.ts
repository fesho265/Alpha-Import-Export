export function useScrollToTop() {
  const handleScrollToTop = () => {
    const start = window.scrollY;
    const duration = 600; // total animation time in ms
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ease function (easeInOutCubic for smoothness)
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const position = start * (1 - easeInOutCubic);
      window.scrollTo(0, position);
      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  };
  return { handleScrollToTop };
}
