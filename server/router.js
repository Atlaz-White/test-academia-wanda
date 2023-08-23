function route(path, handle, res) {

	if (typeof handle[path] === 'function') handle[path](path, res);
	else {

		res.writeHead(404, {
			'content-type': 'text/plain'
		});
		res.write('Page Not Found');
		res.end();
	};
};

module.exports.route = route;
