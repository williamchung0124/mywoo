(function (global) {
  const DESIGN_WIDTH = 750;
  const BASE_FONT_SIZE = 100;
  const RESIZE_DEBOUNCE_DELAY = 100;

  const isMobile = () => {
    return /Android|webOS|iPhone|iPod|BlackBerry|iPad|Mobile/i.test(navigator.userAgent);
  };

  const setHtmlFontSize = () => {
    const shouldApplyMobileStyle = isMobile() || document.documentElement.clientWidth < 767;

    if (shouldApplyMobileStyle) {
      const scale = document.documentElement.clientWidth / DESIGN_WIDTH;
      document.documentElement.style.fontSize = `${BASE_FONT_SIZE * scale}px`;
    } else {
      document.documentElement.style.fontSize = '';
    }
  };

  const debounce = (fn, delay) => {
    let timerId = null;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };

  let resizeListener = null;

  const start = () => {
    setHtmlFontSize();

    const debouncedHandler = debounce(setHtmlFontSize, RESIZE_DEBOUNCE_DELAY);
    resizeListener = debouncedHandler;

    window.addEventListener('resize', debouncedHandler);
  };

  const stop = () => {
    if (resizeListener) {
      window.removeEventListener('resize', resizeListener);
      resizeListener = null;
    }
  };

  // 将方法暴露到全局对象
  global.ResponsiveFontSizeHandler = {
    start,
    stop,
  };
})(window);

// 自动启动
window.ResponsiveFontSizeHandler.start();

{/* <script src="assets/js/resize.js"></script> */ }
// window.ResponsiveFontSizeHandler.stop();