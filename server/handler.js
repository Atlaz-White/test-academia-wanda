const requestHandlers = require('./requestHandlers.js');

const handle = {};

handle['/'] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;
// handle[ '/' ] = requestHandlers.load;

module.exports.handle = handle;
