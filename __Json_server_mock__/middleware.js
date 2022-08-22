module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { userName, password } = req.body;
    if (userName === "admin" && password === "admin") {
      return res.status(200).json({
        user: {
          token: "12121212",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或密码错误",
      });
    }
  }
  next();
};
