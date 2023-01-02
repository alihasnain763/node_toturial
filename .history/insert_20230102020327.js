const getData = require('./mongodb');

const insert = async() => {
    const db = await getData();
    const result = db.insert({
        name: 'node3',
        brand: 'vivo',
        price: 3350,
        category: 'cholychawal'
    })
    console.log(db)
}

insert();