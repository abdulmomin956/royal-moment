import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    const { name, price, image } = product;
    // console.log(product)
    return (
        <div className='product'>

            <img src={require('../../images/pic1.webp')} alt="" />
            <img src={require(`${image}`)} alt="" />
            <h3>{name}</h3>
            <p>Price:${price}</p>
        </div>
    );
};

export default Products;