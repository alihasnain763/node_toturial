const express = require('express');
const app = express();


app.get('', (req, res)=> {
    console.log("data sent by browser no shaper bazzi: ", req.query.name);
    res.send(`
    <input style= 'width: 30rem; hi'; type="text" placeholder="this is pretty bad" />
    ` 
    
    )

});

app.get('/about', (req, res)=> {
    res.send('Hello, this is about  page')
});

app.get('/help', (req, res)=> {
    res.send([
            {
                name: 'Ali',
                email: 'shoper@gmail.com'
            },
            {
                name: 'Ali',
                email: 'shoper@gmail.com'
            }
      
        ])
});

app.listen(4400)