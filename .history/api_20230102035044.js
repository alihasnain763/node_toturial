const express = require('express');
const getData = require('./mongodb');

const app = express();

app.get('/', async (req, res) => {
    let data = await getData();
    data = await data.find.toArray();
    res.send({name: 'anil'})

});


app.listen(5000);