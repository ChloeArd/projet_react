import './Cart.css';

import {CartItem} from "../CartItem/CartItem";

export const Cart = function () {

    const cartItems = [
        {id: 1, title: "Produit 1", quantity: 2 },
        {id: 2, title: "Produit 4", quantity: 4 },
        {id: 3, title: "Produit 3", quantity: 4 }
    ];

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {cartItems.map(cartItem => <CartItem id={cartItem.id} title={cartItem.title} quantity={cartItem.quantity} />)}
            <button className="empty">Vider le panier</button>
        </div>
    );
}