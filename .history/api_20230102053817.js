const express = require('express');
const getData = require('./mongodb');
const mongodb = require('mongodb')
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

app.put("/:name", async( req, res) => {
    console.log(req.body)
    let data = await getData();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
      
    )
    res.send({result: "updated"})
}) 


app.delete("/:id", async(req, res) => {
    console.log(req.params.id)
    const data = await getData();
    const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send("done")
})
app.listen(5000);   