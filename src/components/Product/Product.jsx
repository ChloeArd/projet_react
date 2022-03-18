import './Product.css';

import {QuantitySelector} from "../QuantitySelector/QuantitySelector"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import PropTypes from 'prop-types';


export const Product = function (props) {

    return (
        <div className="Product" id={props.id}>
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <span className="favorite"><FontAwesomeIcon icon={faHeart} /></span>
                <h1>{props['title']}</h1>
                <p className="description">{props.description}</p>
                <div className="flexRow">
                    <QuantitySelector />
                    <p className="price">${props.price}</p>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
};