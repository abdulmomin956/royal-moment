import { useState } from 'react';
import MyDataArray from '../../myData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = product => {
        const checkPrev = cart.filter(pro => pro.id === product.id);
        // console.log(checkPrev);
        if (checkPrev.length === 0) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
        else {
            alert('Please select different item');

        }

    }
    // console.log(cart);
    const chooseOne = () => {
        if (cart.length === 0) {
            return;
        }
        let rndNum = Math.round(Math.random() * 10);
        if (rndNum < cart.length) {
            console.log(cart[rndNum])


        }
        else {
            return chooseOne();
        }
        // console.log(rndNum)
    }
    return (
        <section>
            <div className='products'>
                {
                    MyDataArray.map(product => <Products product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className='cart'>
                <h3>Selected Watch</h3>

                {
                    cart.map(item => <Cart
                        item={item}
                        key={item.id}
                    >
                    </Cart>)
                }
                <button onClick={chooseOne}>CHOOSE 1 FOR ME</button>
                <button>RESET CART</button>
            </div>

        </section>
    );
};

export default Body;