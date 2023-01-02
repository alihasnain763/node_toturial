const express = require('express');
const app = express();

const reqFilter =( (req, res, next) =>{
    console.log('Reqfilter')
    next();
});

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page')
});

app.get('/user', (req, res) => {
    res.send('Welcome to user page')
});

app.listen(40000);