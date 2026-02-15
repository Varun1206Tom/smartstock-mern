
import React from 'react'
import Sectionheader from '../components/Sectionheader';

const Products = () => {

    const products = [
        { name: "Coffee Beans", stock: 12 },
        { name: "Green Tea", stock: 3 },
    ];

    return (
        <div>
            <Sectionheader title="Products" />

      <div className="grid grid-cols-3 gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl"
          >
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-slate-400 text-sm">
              Stock: {product.stock}
            </p>

            {product.stock < 5 && (
              <span className="text-red-400 text-xs">
                Low Stock
              </span>
            )}
          </div>
        ))}
      </div>
        </div>
    )
}

export default Products


// import React , { useState, useEffect }from 'react'
// import axios from '../services/axios';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [form, setForm] = useState({
//         name: "",
//         sku: "",
//         price: "",
//         quantity: "",
//     });

//     const loadProducts = async () => {
//        try {
//         const response = await axios.get('/products');
//         setProducts(response?.data)
//        } catch (error) {
//         console.log("Error in Products :", error);
//        }
//     };

    

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     const handleSubmit = async () => {
//         // await createProduct(form);
//         try {
//             const response = await axios.post(`/products`, form);
//             console.log("Response :", response);
            
//         } catch (error) {
//             console.log("Error :", error);
//         }
//         loadProducts();
//     };

//     return (
//         <div>
//             <h2>Products</h2>

//             <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
//             <input placeholder="SKU" onChange={e => setForm({ ...form, sku: e.target.value })} />
//             <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
//             <input placeholder="Qty" onChange={e => setForm({ ...form, quantity: e.target.value })} />

//             <button onClick={handleSubmit}>Add Product</button>

//             {products.map(p => (
//                 <div key={p._id}>
//                     {p.name} — Stock: {p.quantity}
//                     {p.quantity < 5 && <span> 🔥 Low Stock</span>}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Products