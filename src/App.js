import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // استيراد ملف CSS

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div>
      <h1>E-Commerce App</h1>
      <div className="container">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
