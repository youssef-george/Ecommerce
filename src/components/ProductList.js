import React from "react";

const products = [
  { id: 1, name: "Product 1", price: 50 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 70 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
