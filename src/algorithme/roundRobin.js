const proxyService = require('../utils/proxyService')
let  current  =  0

const roundRobin =  (servers, req, res)  =>{
    const target = servers[current]
    current  =  (current + 1) % servers.length
    
    proxyService(target, req, res)
}

module.exports =  roundRobin