const getData = require('./mongodb');

const insert = () => {
    const db = getData();
    console.log(db)
}

insert()