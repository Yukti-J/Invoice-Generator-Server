const Products = require("../models/products")

const createProduct = async(req,res) => {
    const {invoiceId, productName, productQuantity, productRate} = req.body;

    try {
        const newProduct = new Products({
            invoiceId,
            productName,
            productQuantity,
            productRate,
            productTotal: productQuantity * productRate
        });
    
        const product = await newProduct.save();
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({mssg: error.message});  
    }
}

module.exports = createProduct;