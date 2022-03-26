import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({ handleAddToCart, product }) => {
    const { name, price, photo } = product;
    return (
        <div className='product'>
            <div className="img-part"><img style={{ height: '200px' }} src={photo} alt="" /></div>
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(product)}><p className='btn-text'>Add to cart</p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Products;