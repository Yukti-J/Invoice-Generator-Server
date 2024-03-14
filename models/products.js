const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    invoiceId:{
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productRate: {
        type: Number,
        required: true
    },
    productTotal: {
        type: Number,
        required: true
    }
})

const Products = mongoose.model("Products", productSchema);
module.exports = Products;