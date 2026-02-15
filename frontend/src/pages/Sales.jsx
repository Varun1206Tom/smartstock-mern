import React, { useState, useEffect } from "react";
import axios from "../services/axios";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  // ✅ Load Products
  const loadProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response?.data);
    } catch (error) {
      console.log("Error loading products:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // ✅ Add To Cart 🔥
  const handleAddToCart = () => {
    setError("");

    if (!selectedProduct || !quantity) {
      return setError("Select product & quantity");
    }

    const product = products.find(p => p._id === selectedProduct);

    if (!product) return;

    if (quantity > product.quantity) {
      return setError(`Only ${product.quantity} units available`);
    }

    const alreadyExists = cart.find(item => item.productId === product._id);

    if (alreadyExists) {
      return setError("Product already added");
    }

    const newItem = {
      productId: product._id,
      name: product.name,
      quantity: Number(quantity),
      price: product.price,
      total: Number(quantity) * product.price,
    };

    setCart([...cart, newItem]);
    setQuantity("");
  };

  // ✅ Remove Item
  const handleRemove = (productId) => {
    setCart(cart.filter(item => item.productId !== productId));
  };

  // ✅ Grand Total 🔥
  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

  // ✅ Checkout 🔥🔥🔥
  const handleCheckout = async () => {
    try {
      setError("");

      if (cart.length === 0) {
        return setError("Cart is empty");
      }

      const saleData = {
        items: cart.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };

      const response = await axios.post("/sales", saleData);

      console.log("Sale Response:", response);

      alert("Sale Completed ✅");

      setCart([]);
      loadProducts();

    } catch (error) {
      console.log("Sale Error:", error);
      setError(error?.response?.data?.message || "Sale failed");
    }
  };

  return (
    <div>
      <h2>Sales</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Product Dropdown */}
      <select onChange={e => setSelectedProduct(e.target.value)}>
        <option value="">Select Product</option>
        {products.map(product => (
          <option key={product._id} value={product._id}>
            {product.name} (Stock: {product.quantity})
          </option>
        ))}
      </select>

      {/* ✅ Quantity */}
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button onClick={handleAddToCart}>Add To Cart</button>

      <hr />

      {/* ✅ Cart */}
      <h3>Cart</h3>

      {cart.length === 0 && <p>No items added</p>}

      {cart.map(item => (
        <div key={item.productId}>
          {item.name} — Qty: {item.quantity} — ₹{item.total}
          <button onClick={() => handleRemove(item.productId)}> ❌ </button>
        </div>
      ))}

      <hr />

      {/* ✅ Total */}
      <h3>Total: ₹{grandTotal}</h3>

      <button onClick={handleCheckout}>Complete Sale</button>
    </div>
  );
};

export default Sales;