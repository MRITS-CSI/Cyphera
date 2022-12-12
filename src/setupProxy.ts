const { createProxyMiddleware } = require("http-proxy-middleware");

export default function (app: any) {
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "https://csi-mrits.tech/",
      changeOrigin: true,
    })
  );
}