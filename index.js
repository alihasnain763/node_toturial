const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/e-comm");
const  ProductSch = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
const saveInDB = async() => {

    const ProductModel = mongoose.model('product', ProductSch);
    let data = await new ProductModel(
        {
            name: "m8",
            price: 3434,
            brand: "haper",
            category: "koper"

        }
        
        );
    console.log(data)
    let result  = await data.save();
    console.log(result)

};

const updateInDb = async () => {
    mongoose.set("strictQuery", false);
    const Product = mongoose.model('product', ProductSch);
    let data = await Product.updateOne(
        {
            name: "m8"
        },
        {
            $set: {price: 7943574834}
        }
        
        )
        console.log(data)
    }
    
    const deleteInDb = async () => {
    const Product = mongoose.model('product', ProductSch);
    let data  = await Product.deleteOne(
        {
            name: "m8"
        }

        )
}
    const findInDb = async () => {
    const Product = mongoose.model('product', ProductSch);
    let data  = await Product.find()
    console.log(data)
}
// updateInDb()
// saveInDB()
findInDb();