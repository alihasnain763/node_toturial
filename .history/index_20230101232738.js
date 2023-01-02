const getData = require('./mongodb')
const main = async () => {
   let data = await getData();
   data = await data.find().toArray();
   console.log(data);
}

main();
console.log(getData());
