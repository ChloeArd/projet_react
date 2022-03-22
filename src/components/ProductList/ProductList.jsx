import './ProductList.css';

import {Product} from "../Product/Product";

export const ProductList = function ({products, setIsProductUpdated}) {

    return(
        <div className="ProductList">
            {products.map(product => <Product key={product.id} product={product} setIsProductUpdated={setIsProductUpdated} />)}
        </div>
    );
}