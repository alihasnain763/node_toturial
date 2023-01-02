const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

 module.exports =   mongoose.model("products", productSchema)
