const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://service.picasso.adesk.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // 替换api为''
      },
    })
  );
};
