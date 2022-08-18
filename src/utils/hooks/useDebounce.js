import { useEffect, useState } from "react";
// const debounce = (fn, delay) => {
//   let timer = null;
//   return function (...args) {
//     const context = this;
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }
//     setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };
const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
};
export default useDebounce;
