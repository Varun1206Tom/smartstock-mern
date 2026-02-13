import React from 'react'
import axios from '../services/axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        sku: "",
        price: "",
        quantity: "",
    });

    const loadProducts = async () => {
       try {
        const response = await axios.get('/products');
        setProducts(response?.data)
       } catch (error) {
        console.log("Error in Products :", error);
       }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleSubmit = async () => {
        await createProduct(form);
        loadProducts();
    };

    return (
        <div>
            <h2>Products</h2>

            <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
            <input placeholder="SKU" onChange={e => setForm({ ...form, sku: e.target.value })} />
            <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
            <input placeholder="Qty" onChange={e => setForm({ ...form, quantity: e.target.value })} />

            <button onClick={handleSubmit}>Add Product</button>

            {products.map(p => (
                <div key={p._id}>
                    {p.name} — Stock: {p.quantity}
                    {p.quantity < 5 && <span> 🔥 Low Stock</span>}
                </div>
            ))}
        </div>
    );
}

export default Products