const { MongoClient } = require("mongodb");

const url = "mongo://localhost:27017";

const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
}
