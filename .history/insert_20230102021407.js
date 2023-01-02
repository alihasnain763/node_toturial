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
      name: "node3",
      brand: "vivo",
      price: 3350,
      category: "cholychawal",
    },
  ]);

  console.log(result);
};

insert();
