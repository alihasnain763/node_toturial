const express = require('express');
const app = express();

const reqFilter =( (req, res, next) =>{
    console.log('Reqfilter')
})

app.get('/', (req, res) => {
    res.send('Welcome to home page')
});

app.get('/user', (req, res) => {
    res.send('Welcome to user page')
});

app.listen(40000)