import './Cart.css';

import {CartItem} from "../CartItem/CartItem";

export const Cart = function ({products}) {

    function handleCartEmptyButtonClick() {
        console.log('Le bouton vider le panier a été cliqué !');
    }

    const getCartItem = () => {
        let jsxCartItem = [];
        for (let i = 0; i < products.length; i++) {
            // Displays products that are added to cart
            if (products[i].cart > 0) {
                jsxCartItem.push(<CartItem key={products[i].id} product={products[i]} />)
            }
        }
        return jsxCartItem;
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {getCartItem()}
            <button className="empty" onClick={handleCartEmptyButtonClick}>Vider le panier</button>
        </div>
    );
}