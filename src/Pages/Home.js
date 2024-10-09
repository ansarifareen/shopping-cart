import React from "react";
import "./home.css";
import picture from "./Shopping.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";


function Home({products}) {
 
  // const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleCardFunction =(id)=>{
      navigate(`/product/${id}`)

  }

  return (
    <div>
      <div className="home-div">
        <img src={picture} alt="Snow"></img>
        <h1 className="heading">Welcome to the FASHION-GATE</h1>
        <h3>Checkout all the Latest and Trendy Collection.....</h3>
      </div>
      <h2 className="headTwo">Products</h2>
      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt="Product Image"
              className="product-image"
              onClick={()=>handleCardFunction(item.id)}
            />
            <div className="card-content">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">Rs. {item.price}</p>
              <button className="add-to-cart-btn" onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


