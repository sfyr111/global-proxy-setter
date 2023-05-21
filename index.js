const { bootstrap } = require('global-agent');

// Set the default port
let port = '1086';

// Check if a port has been provided in the environment variables
if (process.env.SET_PROXY_PORT) {
  port = process.env.SET_PROXY_PORT;
}

// Replace these values with your proxy server address and port
const proxyServer = 'http://127.0.0.1:' + port;
const proxySocks = 'socks5://127.0.0.1:' + port;

// Set the environment variables for global-agent
process.env.GLOBAL_AGENT_HTTP_PROXY = proxyServer;
process.env.GLOBAL_AGENT_HTTPS_PROXY = proxyServer;
process.env.GLOBAL_AGENT_NO_PROXY = '';

console.log(`
------------------------------------
🚀 global-proxy-setter starting up! 🚀
Setting proxy to: ${proxyServer}
------------------------------------
`);

bootstrap();
