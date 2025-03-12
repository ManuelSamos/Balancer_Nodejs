const roundRobin = require('../algorithme/roundRobin')
const leastConnections = require('../algorithme/leastConections')
const serverConfig = require('../servers/config.json').servers

const servers = serverConfig.map(server => ({
    ...server,
    connections: 0
}))

const loadBalancingAlgorithme = 'leastConecctions'

const balancerService = (req, res) => {
    if (loadBalancingAlgorithme === 'roundRobin') {
        roundRobin(servers, req, res)
    } else if (loadBalancingAlgorithme === 'leastConecctions') {
        leastConnections(servers, req, res)
    } else {
        res.writeHead(500)
        res.end(`Load balancing  algorithm is not support`)
    }
}

module.exports = balancerService