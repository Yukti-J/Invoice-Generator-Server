const Invoices = require("../models/invoices")

const createInvoice = async(req, res) =>{
    try {
        const {userId} = req.body;

        const newInvoice = new Invoices({
            userId,
            subTotal: 0,
            grandTotal: 0,
        })
        console.log(newInvoice);
        await newInvoice.save();

        const invoice = await Invoices.find();
        res.status(201).json(invoice);

    } catch (error) {
        res.status(409).json({message: error.message})
    } 
}



module.exports = createInvoice;
