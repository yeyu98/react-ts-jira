export const isFalsy = (value) => (value === 0 ? true : !!value);
// 当对象的某个属性的值为空的时候删除掉该属性
export const cleanObject = (obj) => {
  const _obj = { ...obj };
  Object.keys(_obj).forEach((key) => {
    if (!isFalsy(_obj[key])) {
      delete _obj[key];
    }
    console.log(_obj);
  });
  return _obj;
};
