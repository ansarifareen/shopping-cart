import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import './productDetail.css'
import { Link } from 'react-router-dom';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) =>
    state.allCart.items.find((product) => product.id === parseInt(id))
  );
 
  if(!product){
    return <p>Product not Found.</p>
  }
  return (
    <div>
      <div className="detailcart-card" >
        <img
          src={product.image}
              alt="Product Image"
          className="productDetail-image"
        />
        <div className="productDetail-content">
          <h3 className="productDetail-title">
            {product.title}
          </h3>
          <p className='description'>{product.description}</p>
          <p className="cartproduct-price">Rs. {product.price}</p>
          <div>
            <button className="add-to-cart-btn-d" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <Link to='/'>
              <button className="add-to-cart-btn-d">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
