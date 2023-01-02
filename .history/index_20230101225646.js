const { MongoClient } = require("mongodb");

const url = "mongo://localhost:27017";

const client = new MongoClient(url);

function getData() {
  let result = client.connect();
}
