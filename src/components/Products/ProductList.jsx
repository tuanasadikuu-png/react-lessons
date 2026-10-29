import React, { useState } from 'react'
import './product.css';

function ProductList() {

    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [error, setError] = useState([]);

    const createNewProduct = (e) => {
        e.preventDefault()
        if (name.trim() === "") {
            setError(['Product name is required']);

        } else if (price === "") {
            setError(['Product price is required']);

        } else if (description.trim() === '') {
            setError(['Product description is required']);

        } else if (category.trim() === '') {
            setError(['Product category is required']);

        } else if (quantity === "") {
            setError(['Product quantity is required']);

        } else {
            const newProduct = {
                id: Date.now(),
                name,
                price,
                description,
                category,
                quantity
            };
            setProducts([...products, newProduct]);
            setName('');
            setPrice('');
            setDescription('');
            setCategory('');
            setQuantity('');
            setError([]);

        };
        return (
            <div className="app">
                <header className="header">Manage Prducts</header>
                <main className="container">
                    <div className="stats">
                        <div className="stat-card">
                            <h3>Total Products</h3>
                            <h2>34</h2>
                        </div>
                    </div>
                </main>
                <div className="card">
                    <h2>add new product</h2>
                    <form onSubmit={createNewProduct}>
                        <div className="form-grid">
                            <div className="form group">
                                <label htmlFor="name">Product Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                            <div className="form group">
                                <label htmlFor="price">Product Price</label>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="form group">
                                <label htmlFor="description">Product Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form group">
                                <label htmlFor="category">Product Category</label>
                                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="clothing">Clothing</option>
                                    <option value="books">Books</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                                <input

                                />
                            </div>
                            <div className="form group">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>


                        </div>
                        {error.length > 0 && (
                            <div className="error">
                                {error.map((err, index) => (
                                    <p key={index}>{err}</p>
                                ))}
                            </div>
                        )}
                        <button type="submit" className="add-btn">Add Product</button>
                    </form>
                </div>
                <div className="card">
                    <div className="products">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="product">
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Quantity: {product.quantity}</p>
                                </div>
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;