const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

app.set('view engine', 'ejs')
// app.use(express.static(publicPath))

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/login', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/profile', (_, res) => {
    const user = {
        name: 'anil sidhu',
        email: 'anil@gmail.com',
        city: 'noida',
        skills: ['shoper','java', 'javascript', 'c++' ]
    }
    res.render(`profile`, {user})
});

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
});

app.get('/home', (_, res) => {
    res.sendFile(`${publicPath}/Home.html`)
});
app.get('*', (_, res) => {
    res.sendFile(`${publicPath}/404.html`)
});

console.log(__dirname)

app.listen(4400)