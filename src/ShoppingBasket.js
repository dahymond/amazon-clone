import React from 'react';
import './ShoppingBasket.css';
import { useStateValue } from './StateProvider';

function ShoppingBasket() {
    const [{basket}, dispatch] = useStateValue();
    return (
        
        <div>
         <h3>
            {basket.title} 
         </h3>
        </div>
    )
}

export default ShoppingBasket
