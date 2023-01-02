const express = require('express');
const app = express();


app.get('', (req, res)=> {
    res.send('Hello, this home page')
});

app.get('/about', (req, res)=> {
    res.send('Hello, this is about  page')
});