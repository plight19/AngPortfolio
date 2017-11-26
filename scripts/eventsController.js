var fs = require('fs');

module.exports.get = function (reg, res) {
    var event = fs.readFileSync('app/data/event/' + reg.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

module.exports.save = function (reg, res) {
    var event = reg.body;
    fs.writeFileSync('app/data/event' + reg.params.id + '.json', JSON.stringify(event));
    res.send(event);
}