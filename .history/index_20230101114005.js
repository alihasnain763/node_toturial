const express = require('express');
const reqFilter = require('./middleware')
const app = express();


// app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page')
});
app.get('/about', (req, res) => {
    res.send('Welcome to about page')
});

app.get('/user', reqFilter,  (req, res) => {
    res.send('Welcome to user page')
});

app.listen(40000);