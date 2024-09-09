import React from "react";

function Cart({ cartItems, addToCart, removeFromCart }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>
            {item.qty} x ${item.price}
          </p>
          <div>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item)}>-</button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <div>
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
