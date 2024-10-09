import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Navbar from './components/Navbar'
import products from "./Data";
import ProductDetail from './components/ProductDetail'
import Checkout from './components/Checkout'
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home products={filteredProducts} />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;