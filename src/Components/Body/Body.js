import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <section>
            <div className='products'>
                {
                    products.map(product => <Products product={product} key={product.id}></Products>)
                }
            </div>
            <Cart></Cart>
        </section>
    );
};

export default Body;