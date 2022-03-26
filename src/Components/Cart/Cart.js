import React from 'react';
import './Cart.css'

const Cart = ({ item }) => {
    // console.log(item);
    return (
        <div>
            <p>{item.name}</p>
        </div>
    );
};

export default Cart;