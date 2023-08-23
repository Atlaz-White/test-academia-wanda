const {
	getHostname,
	getPort,
	faviconLocked
} = require('./tools.js');

const http = require('http');
const os = require('os');

const _hostname = getHostname();
const _port = getPort();

class ServerConfig {
	constructor(port, hostname, route, handle) {
		this.hostname = hostname || _hostname;
		this.port = port || _port;
		this.route = route || null;
		this.handle = handle || null;
	}
};

function launch(config = new ServerConfig()) {

	const hostname = config['hostname'];
	const port = config['port'];
	const route = config['route'];
	const handle = config['handle'];
	const domine = `http://${hostname}:${port}/`;

	const requestListener = function requestListener(req, res) {

		if (req.method === 'GET') {
			if (req.url === '/favicon.ico') faviconLocked(res);
			route(req.url, handle, res);
		} else if (req.method === 'POST') {
			// none
			console.log('> none');
		};
	};

	const server = http.createServer(requestListener);

	server.listen(port, hostname, () => {

		console.log(`Server running at ${domine}`);
	});
};

module.exports.launch = launch;
module.exports.config = ServerConfig;
