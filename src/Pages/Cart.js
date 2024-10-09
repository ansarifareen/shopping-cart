import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../features/cartSlice";

function Cart() {
  const { cart, totalQuantity, totalPrice } = useSelector(state => state.allCart)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleCheckout = () => {
    navigate("/checkout");

  }
  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, increment: true }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, increment: false }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((data) => (
          <div className="cart-card" key={data.id}>
            <img
              src={data.image}
              alt="Product Image"
              className="cartproduct-image"
            />
            <div className="cartcard-content">
              <h3 className="cartproduct-title">
                {data.title}
              </h3>

              <div className="quantity-container">
                <button className="quantity-btn" onClick={() => handleDecrement(data.id)}>-</button>
                <span className="quantity-display">{data.quantity}</span>
                <button className="quantity-btn" onClick={() => handleIncrement(data.id)}>+</button>
              </div>
              <p className="cartproduct-price">Rs. {data.price * data.quantity} </p>
              <button className="remove-btn" onClick={() => handleRemove(data.id)}>Remove from Cart</button>
            </div>
          </div>
        ))}

        <div className="summary-container">
          <h2>Summary</h2>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Amount: Rs. {totalPrice.toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
