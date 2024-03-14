const mongoose = require("mongoose")

const invoiceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    subTotal: {
        type: Number,
        default: 0,
        required: true
    },
    grandTotal: {
        type: Number,
        default: 0,
        required: true
    }
})

const Invoices = mongoose.model("Invoices", invoiceSchema)
module.exports = Invoices;