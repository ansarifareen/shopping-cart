import React  from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar({onSearch}) { 
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  const {totalQuantity} = useSelector(state => state.allCart);
  const navigate = useNavigate();
  const clickHome=()=>{
    navigate('/');
  }
  const clickCart=()=>{
    navigate('/cart');
  }
  return (
    <div className="main-nav">
      <span className="logo" onClick={clickHome}>FASHION-GATE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <input type="text" 
        placeholder="Search by Category" 
        value={searchQuery}
        onChange={handleInputChange}
        />
        <span className="cartIcon" onClick={clickCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cartCount">{totalQuantity}</span>
        </span>
      </div>
    </div>
  );
}


export default Navbar;