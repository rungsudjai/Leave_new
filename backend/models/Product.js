const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_name : String,
    prod_desc : String,
    prod_price : Number,
    update_at : {type:Date, default: Date.now}
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;