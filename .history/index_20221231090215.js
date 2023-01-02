const http = require('http');

http.createServer((req, res) => {
    res.write("Hello this is cool");
    res.end();
}).listen(4500);
