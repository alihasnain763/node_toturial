const colors = require('colors');
console.log("fuck".blue)

const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>>Hello this is cool</h1>");
    res.end();
}).listen(4500);
