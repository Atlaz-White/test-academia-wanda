// Without Internet => 127.0.0.1 || localhost
// With Internet => 192.168.x.x

function faviconLocked(res) {

    res.writeHead(200, {
        'content-type': 'image/x-icon'
    });
    res.end();
    // return;
    // console.log('¡¡FAVICON!!');
};

module.exports = {
    'registerConnection': require('./register-connection.js'),
    'getIPv4': Object.values(require('os').networkInterfaces()).map(arr => arr.find(obj => obj.family === 'IPv4').address),
    'faviconLocked': faviconLocked
};
