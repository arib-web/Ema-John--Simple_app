import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price, quantity } = props.product;
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price:${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;