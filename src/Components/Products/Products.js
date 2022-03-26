import React from 'react';
import './Products.css'

const Products = ({ handleAddToCart, product }) => {
    const { name, price, photo } = product;
    return (
        <div className='product'>
            <div className="img-part"><img style={{ height: '200px' }} src={photo} alt="" /></div>
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
    );
};

export default Products;