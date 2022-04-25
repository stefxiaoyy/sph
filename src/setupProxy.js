const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/constellation',
    createProxyMiddleware({
      target: 'http://web.juhe.cn',
      changeOrigin: true,
    })
  );
};