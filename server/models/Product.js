const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        sku: { type: String, required: true },
        price: { type: String, required: true },
        quantity: { type: String, required: true },
        category: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema)