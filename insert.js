const getData = require("./mongodb");

const insert = async () => {
  const db = await getData();
  const result = await db.insertMany([
    {
      name: "node3",
      brand: "vivo",
      price: 3350,
      category: "cholychawal",
    },
    {
      name: "nodasdfasdfe3",
      brand: "visdasvo",
      price: 33534320,
      category: "sfddasfda",
    }
  ]);

  console.log(result);
};

insert();
