import React from "react";
import useArray from "utils/hooks/useArray";
import useMount from "utils/hooks/useMount";
const person: { name: string; age: number }[] = [
  { name: "jack", age: 25 },
  { name: "tom", age: 23 },
];
console.log(person);
function TestUseArray(props: any) {
  const { value, clear, add, removeIndex } = useArray(person);
  useMount(() => {
    // console.log(value.notE);
    // add({name: '123223'})
    // removeIndex('3282978')
  });
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 24 })}>添加</button>
      <button onClick={() => removeIndex(0)}>移除0</button>
      <button onClick={clear}>清空</button>
      {value.map((item) => (
        <div key={item.name}>
          <span>{item.name}</span>
          <span>{item.age}</span>
        </div>
      ))}
    </div>
  );
}

export default TestUseArray;
