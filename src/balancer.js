require('dotenv').config({ path: ".env" });
const http = require('http');
const https = require('https');
const fs = require('fs');
const balancerService = require("./utils/processService");

const {
    MAXLISTENERS,
    HTTP_SERVER_PORT,
    HTTPS_SERVER_PORT,
    CERTIFICATE_PATH_KEY,
    CERTIFICATE_PATH_CER
} = process.env;


let httpsOptions = {};
try {
    if (CERTIFICATE_PATH_KEY && CERTIFICATE_PATH_CER) {
        httpsOptions = {
            key: fs.readFileSync(CERTIFICATE_PATH_KEY),
            cert: fs.readFileSync(CERTIFICATE_PATH_CER),
        };
    } else {
        console.warn("⚠️ SSL certificates not found. The HTTPS server will not start.");
    }
} catch (error) {
    console.error("❌ Error loading SSL certificates:", error.message);
}


const startServer = (server, port, protocol) => {   
    server.setMaxListeners(parseInt(MAXLISTENERS));

    server.listen(port, () => {
        console.log(`✅ Server ${protocol} running on port ${port}`);
    }).on("error", (err) => {
        console.error(`❌ Error on server ${protocol}:`, err.message);
    });
}

const httpServer = http.createServer(balancerService);

startServer(httpServer, HTTP_SERVER_PORT, "HTTP");

if (httpsOptions.key && httpsOptions.cert) {
    const httpsServer = https.createServer(httpsOptions, balancerService);
    startServer(httpsServer, HTTPS_SERVER_PORT, "HTTPS");
}