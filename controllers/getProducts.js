const Products = require("../models/products")

const getProducts = async(req,res) => {
    try {
        const {invoiceId} = req.params;
        const products = await Products.find({invoiceId});
        res.status(200).json(products)
        
    } catch (error) {
        res.status(404).json({mssg: error.message});  
    }
}

module.exports = getProducts;