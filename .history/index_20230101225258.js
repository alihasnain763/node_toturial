const {MongoClient} = require('mongodb');

const url = 'mongo://localhost:27017';

const client = new MongoClient(url)