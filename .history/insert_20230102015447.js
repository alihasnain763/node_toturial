const getData = require('./mongodb');

const insert = async() => {
    const db = await getData();
    console.log(db)
}

insert()