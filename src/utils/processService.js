require('dotenv').config({ path: ".env" });
const roundRobin = require('../algorithme/roundRobin')
const leastConnections = require('../algorithme/leastConections')
const serverConfig = require('../servers/config.json').servers
const { ALGORITHM } = process.env;

const servers = serverConfig.map(server => ({
    ...server,
    connections: 0
}))

const algorithms = {
    roundRobin,
    leastConnections,
};

const balancerService = (req, res) => {
    const algorithm = algorithms[ALGORITHM];    

    if (algorithm) {
        algorithm(servers, req, res);
    } else {
        res.writeHead(500);
        res.end(`Load balancing algorithm "${ALGORITHM}" is not supported`);
    }
}

module.exports = balancerService