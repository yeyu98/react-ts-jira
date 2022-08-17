const useDebounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
export default useDebounce;
