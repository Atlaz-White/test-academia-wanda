const {
    existsSync,
    writeFileSync,
    readFileSync,
    copyFileSync
} = require('fs');
const path = __dirname.concat('/../database/');
const [
    name,
    ext
] = [
    'register-connection',
    '.json'
];
const _orig = path.concat(name.concat(ext));
const _dest = path.concat(name.concat('-backup').concat(ext));

function _main(ip, message) {

    if (!existsSync(path)) writeFileSync(path, '[]');
    copyFileSync(_orig, _dest, 'w');

    let data = JSON.parse(readFileSync(_orig, 'UTF-8'));
    data = data.find(obj => obj.ip === ip) ? _update(ip, data) : _create(ip, data);

    writeFileSync(_orig, JSON.stringify(data, null, 2), 'UTF-8');
    if (message === true) console.log('New connection on the server:', ip);
};

function _update(ip, data) {

    data.find(obj => obj.ip === ip).input.push(new Date());
    return data;
};

function _create(ip, data) {

    const obj = {};
    obj['ip'] = ip;
    obj['input'] = new Array(new Date());
    data.push(obj);
    return data;
};

module.exports = _main;
