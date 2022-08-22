const errorCaptured = async (asyncFunc: Function, ...args: any) => {
  try {
    const res = await asyncFunc(...args);
    return [null, res];
  } catch (err) {
    console.log("err --->>>", err);
    return [err, null];
  }
};
export default errorCaptured;
