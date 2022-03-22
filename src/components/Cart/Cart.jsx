import './Cart.css';

import {CartItem} from "../CartItem/CartItem";

export const Cart = function ({products}) {

    function handleCartEmptyButtonClick() {
        console.log('Le bouton vider le panier a été cliqué !');
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {products.map(product => <CartItem key={product.id} product={product} />)}
            <button className="empty" onClick={handleCartEmptyButtonClick}>Vider le panier</button>
        </div>
    );
}