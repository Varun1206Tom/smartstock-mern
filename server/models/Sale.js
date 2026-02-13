const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
    {
        items: [
            { 
                productId: mongoose.Schema.Types.ObjectId,
                quantity: Number,
                price: Number,
            },
        ],
        totalAmount: Number,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Sale", saleSchema);