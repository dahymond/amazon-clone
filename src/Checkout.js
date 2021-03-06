import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  alt=""
                />

                <div>
                  <h2 className="checkout__title">Your Shopping Basket</h2>
                 
                  {basket.map(item =>
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                     )}

                  {/* BasketItem*/}
                  {/* BasketItem*/}
                  {/* BasketItem*/}
                  {/* BasketItem*/}
                </div>

            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
