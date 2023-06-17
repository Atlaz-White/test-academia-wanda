const server = require('./server/server.js');
const router = require('./server/router.js');
const handler = require('./server/handler.js');

// serverConfig
const serverConfig = new server.config(undefined, undefined, router.route, handler.handle);

server.launch(serverConfig);
