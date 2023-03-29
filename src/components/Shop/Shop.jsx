import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart=[...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Items:{cart.length }</p>
                <p>Total Price:${ }</p>
                <p>Total Shipping Charge:${ }</p>
                <p>Tax:$</p>
                <h3>Grand Total:${ }</h3>
            </div>
        </div>
    );
};

export default Shop;