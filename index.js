const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

const toolS = require('./server/module/tools-server.js');

const ipaddress = toolS.getIPv4[1];
const port = 2023;
const url_d = `http://${ipaddress}:${port}`;

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

server.listen(port, ipaddress, () => {
	console.log(url_d);
});
