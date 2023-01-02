const http   = require('http');
const data = require('./data');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify({name: "Anil Sidhu", email: "anilsidhu@shope.com"}));
    res.end();      
}).listen(43433);
