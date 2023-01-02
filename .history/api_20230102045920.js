const express = require('express');
const getData = require('./mongodb');

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    let data = await getData();
    data = await data.find().toArray();
    console.log(data)
    res.send(data)

});

app.post('/', async (req, res) => {
    console.log(req.body)
    let data = await getData();
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put("/", async( req, res) => {
    console.log(req.body)
    let data = await getData();
    let result = await data.updateOne(
        {name: "blu"},
        {$set: {price:90540}}
      
    )
    res.send({result: "updated"})
}) 

app.listen(5000);   