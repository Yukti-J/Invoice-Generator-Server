const Invoices = require("../models/invoices");

const updateInvoice = async (req, res) => {
    const { invoiceId, subTotal, grandTotal } = req.body;
    try {

        console.log(invoiceId, subTotal, grandTotal)
        await Invoices.findByIdAndUpdate({_id: invoiceId}, {subTotal: subTotal, grandTotal: grandTotal}).then(response => res.status(200).json(response));
    
        // res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = updateInvoice;
