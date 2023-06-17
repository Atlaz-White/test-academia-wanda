const {
    existsSync,
    readFileSync
} = require('fs');
const options = {
    'encoding': 'UTF-8'
};
const {
    parse
} = require('url');
const {
    extname
} = require('path');

function urlCorrector(path) {

    let pathname = parse(path).pathname;
    let filename = pathname;
    if (pathname.endsWith('/')) filename = pathname.concat('index.html');
    if (!extname(filename)) filename = filename.concat('.html');
    filename = __dirname.concat('./../public/'.concat(filename));
    return filename;
};

function load(url, res) {

    if (existsSync(urlCorrector(url))) {

        const documentHTML200 = readFileSync(urlCorrector(url), options);
        res.writeHead(200, {
            'content-type': 'text/html',
            'content-length': Buffer.byteLength(documentHTML200),
        });
        res.write(documentHTML200);
        res.end();

        console.log('Reply sent:', url);
    } else if (existsSync(urlCorrector('/404'))) {

        const documentHTML404 = readFileSync(urlCorrector('/404'), options);
        res.writeHead(404, {
            'content-type': 'text/html',
            'content-length': Buffer.byteLength(documentHTML404),
        });
        res.write(documentHTML404);
        res.end();

        console.log('Page Not Found:', url);
    } else {

        res.writeHead(500, {
            'content-type': 'text/plain',
        });
        res.write('Server Internal Error');
        res.end();
    };
};

module.exports.load = load;



/*const { existsSync, readFileSync } = require( 'fs' );
const options = { 'encoding' : 'UTF-8' };
const { parse } = require( 'url' );
const { extname } = require( 'path' );

function pathFilter ( path ) {

    let pathname = parse( path ).pathname;
    let filename = pathname;
    if ( pathname.endsWith( '/' ) ) filename = pathname.concat( 'index.html' );
    if ( !extname( filename ) ) filename = filename.concat( '.html' );
	filename = __dirname.concat( './../public/'.concat( filename ) );
    return filename;
};

function contentType ( path ) {

	const ext = extname( path ).substr(1);

	const mimeTypes = {
		'html': 'text/html',
		'js': 'text/javascript',
		'css': 'text/css',
		'json': 'application/json',
		'png': 'image/png',
		'jpg': 'image/jpg',
		'gif': 'image/gif',
		'svg': 'image/svg+xml',
		'wav': 'audio/wav',
		'mp4': 'video/mp4',
		'woff': 'application/font-woff',
		'ttf': 'application/font-ttf',
		'eot': 'application/vnd.ms-fontobject',
		'otf': 'application/font-otf',
		'wasm': 'application/wasm'
	};

	return mimeTypes[ ext ] || 'application/octet-stream';
};

function load ( path, res ) {

	const newPath = pathFilter( path );

	if ( existsSync( newPath ) ) {

		const documentHTML200 = readFileSync( newPath, options );
		res.writeHead( 200, {
			'content-type' : contentType( newPath ),
			'content-length' : Buffer.byteLength( documentHTML200 ),
		});
		res.write( documentHTML200 );
		res.end();

		console.log( 'Reply sent:', path );
	} else if ( existsSync( pathFilter( '/404' ) ) ) {

		const documentHTML404 = readFileSync( pathFilter( '/404' ), options );
		res.writeHead( 404, {
			'content-type' : 'text/html',
			'content-length' : Buffer.byteLength( documentHTML404 ),
		});
		res.write( documentHTML404 );
		res.end();

		console.log( 'Page Not Found:', path );
	} else {

		res.writeHead( 500, {
			'content-type' : 'text/plain',
		});
		res.write( 'Server Internal Error' );
		res.end();

		console.log( 'Server Internal Error:', path );
	};
};

module.exports.load = load;*/
