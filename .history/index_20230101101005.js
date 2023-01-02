const express = require('express');
const app = express();

const reqFilter =( (req, res, next) =>{
    if(!req.query.age){
        res.send("please provide age")
    } 
    else if(req.query.age<18){
        res.send('you cannot access this page')
    }
    
    else{
        console.log('Reqfilter')
        next();
    }
});

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page')
});

app.get('/user', (req, res) => {
    res.send('Welcome to user page')
});

app.listen(40000);