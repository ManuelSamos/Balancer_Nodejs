const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyService = (target, req, res) => {
    const proxy = createProxyMiddleware({
        target: `http://${target.host}:${target.port}`,
        changeOrigin: true,
        onProxyRes: () => {
            target.connections--;
        },
        onError: (err, req, res) => {
            console.error(`Error in proxy towards${target.host}:${target.port}`, err);
            target.connections--;
            res.writeHead(502, { 'Content-Type': 'text/plain' });
            res.end('Error on the destination server');
        }
    });

    proxy(req, res);
}

module.exports = proxyService