const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

// app.use(express.static(publicPath))

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

console.log(__dirname)

app.listen(4400)