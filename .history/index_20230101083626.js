const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to home page')
})
app.get('/user', (req, res) => {
    res.send('Welcome to user page')
})

app.listen(40000)