import './CartItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';

export const CartItem = function (props) {

    return (
        <div className="CartItem" id={props.id}>
            <div className="width_20">
                <p className="trash"><FontAwesomeIcon icon={faTrashAlt} /></p>
            </div>
            <div className="width_80_2">
                <div className="flexRow">
                    <p className="titleCartItem">{props.title}</p>
                    <span className="quantity">({props.quantity})</span>
                </div>
                <div className="lineHorizontal"/>
            </div>

        </div>
    )
}