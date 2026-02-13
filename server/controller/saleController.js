const Sale = require("../models/Sale");
const Product = require("../models/Product");

exports.createSale = async ( req, res ) => {
    try {
        const { items } = req.body;

        let totalAmount = 0;

        for (const item of items) {
            const product = await Product.findById(item.productId);

            if (!product) throw new Error("Product not Found");

            if (product.quantity < item.quantity) {
                throw new Error(`Only ${product.quantity} items left`);
            }

            product.quantity -= item.quantity;
            await product.save();

            totalAmount += item.quantity * product.price;
            item.price = product.price;
        }
        
        const sale = await Sale.create({ items, totalAmount });

        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.json(sales)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}