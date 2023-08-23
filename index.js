const express = require('express');
const app = express();

const {
	getHostname,
	getPort
} = require('./server/tools.js');

const _HOSTNAME = getHostname();
const _PORT = getPort();

app.use(express.static("./public"));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(_PORT, _HOSTNAME, () => {
	console.log(`App deploy on -> http://${_HOSTNAME}:${_PORT}`);
});
