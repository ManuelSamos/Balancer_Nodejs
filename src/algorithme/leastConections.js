const proxyService = require('../utils/proxyService')

const leastConnections = (servers, req, res) => {
    servers.sort((a, b) => a.connections - b.connections);

    const target = servers[0];
    target.connections++;

    proxyService(target, req, res)
};

module.exports = leastConnections;