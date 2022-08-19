const errorCaptured = async (asyncFunc, ...args) => {
  try {
    const res = await asyncFunc(...args);
    return [null, res];
  } catch (err) {
    console.log("err --->>>", err);
    return [err, null];
  }
};
export default errorCaptured;
