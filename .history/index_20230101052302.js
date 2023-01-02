const express = require('express');
const app = express();


app.get('', (req, res)=> {
    console.log("data sent by browser no shaper bazzi: ", req.query.name);
    res.send('Hello, this home page')
});

app.get('/about', (req, res)=> {
    res.send('Hello, this is about  page')
});

app.get('/help', (req, res)=> {
    res.send('Hello, this is eeeeeeeeelllllllllllpppppppppp  page')
});

app.listen(4400)