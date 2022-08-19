import { useState } from "react";

const useArray = <A>(params: A[]) => {
  const [currentValue, setCurrentValue] = useState(params);
  const clear: () => void = () => {
    setCurrentValue([]);
  };
  const removeIndex: (index: number) => void = (index: number) => {
    const _currentValue = [...currentValue];
    _currentValue.splice(index, 1);
    setCurrentValue(_currentValue);
  };
  const add: (item: A) => void = (item) => {
    setCurrentValue([...currentValue, item]);
  };

  return {
    value: currentValue,
    clear,
    removeIndex,
    add,
  };
};

export default useArray;
