const mongoose= require('mongoose')
const productschema= new mongoose.Schema({
    name:String,
    price:String,
    Category:String
})
module.exports = mongoose.model('products',productschema)