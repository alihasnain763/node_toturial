const express = require('express');
const reqFilter = require('./middleware')
const app = express();

const route = express.Router();
// app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page')
});
app.get('/about', (req, res) => {
    res.send('Welcome to about page')
});

route.get('/user', reqFilter,  (req, res) => {
    res.send('Welcome to user page')
});
route.get('/contact', reqFilter,  (req, res) => {
    res.send('Welcome to Contact page')
});

app.use('/', route)

app.listen(40000);