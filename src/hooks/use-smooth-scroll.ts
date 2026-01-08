export const useSmoothScroll = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        // Use requestAnimationFrame for smoother animation
        const start = window.scrollY;
        const target =
          element.getBoundingClientRect().top + window.scrollY - 100;
        const distance = target - start;
        const duration = 600; // 0.6 seconds for quicker scroll
        let start_time: number | null = null;

        const scroll = (timestamp: number) => {
          if (!start_time) start_time = timestamp;
          const elapsed = timestamp - start_time;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth curve
          const easeProgress =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, start + distance * easeProgress);

          if (progress < 1) {
            requestAnimationFrame(scroll);
          }
        };

        requestAnimationFrame(scroll);
      }
    }
  };

  return { handleSmoothScroll };
};
