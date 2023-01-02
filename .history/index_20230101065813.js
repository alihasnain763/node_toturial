const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

// app.use(express.static(publicPath))

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
});

app.get('/home', (_, res) => {
    res.sendFile(`${publicPath}/Home.html`)
});
app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/Home.html`)
});

console.log(__dirname)

app.listen(4400)