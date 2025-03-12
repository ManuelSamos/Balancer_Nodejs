# Nodejs Balancer
Balancer to apis created in nodejs

## <img src="https://raw.githubusercontent.com/PromtecInnovation/.github/refs/heads/main/profile/business-management.gif" width ="30"> Configuration
Configure <strong>IP</strong> o <strong>Domain</strong> to use in servers to use in your <code>config.json</code> file:
> "servers":[
>     {"host":"x.x.x.x", "port":xxx, "timeout":200},
>     {"host":"x", "port":xxx, "timeout":200}
> ]
<br>

Configure Port and pats to certificates to use in the balancer in your <code>.env</code> file and run:

> HTTP_SERVER_PORT=
> 
> HTTPS_SERVER_PORT=
> 
> CERTIFICATE_PATH_KEY=
> 
> CERTIFICATE_PATH_CER=


## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="25"> Instalation and build
The build & test instructions below should work out of the box with Node 22. More specifically, it is recommended to use the version 22.14.0.
```
npm install
npm run dev

```

## <img src="https://raw.githubusercontent.com/PromtecInnovation/.github/refs/heads/main/profile/coworking.gif" width ="30"> Structure
```
📂 project
│   ⚙️ .env
│   📄 README.md
│   📄 package.json
│
└───📂 src
    │   📄 balancer.js
    │
    └───📂 algorithme
    |       📄 leastConections.js
    |       📄 roundRobin.js
    |
    └───📂 servers
    |       ⚙️ config.json
    |       
    └───📂 utils
    |       📄 processService.js
    |       📄 proxyService.js

```