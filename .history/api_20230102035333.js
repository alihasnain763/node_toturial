const express = require('express');
const getData = require('./mongodb');

const app = express();

app.get('/', async (req, res) => {
    let data = await getData();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)

});


app.listen(5000);