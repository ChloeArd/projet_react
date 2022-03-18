import './ProductList.css';

import {Product} from "../Product/Product";
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';

export const ProductList = function () {

    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue vitae ligula finibus mollis. Cras tempor vel arcu hendrerit facilisis. Nunc non neque tristique, maximus dolor non, vestibulum mi.";

    const products = [
        {id: 1, title: "Produit 1", image: image1, description: content, price: 230 },
        {id: 2, title: "Produit 2", image: image2, description: content, price: 230 },
        {id: 3, title: "Produit 3", image: image3, description: content, price: 230 },
        {id: 4, title: "Produit 4", image: image4, description: content, price: 230 },
        {id: 5, title: "Produit 5", image: image5, description: content, price: 230 }
    ];

    return(
        <div className="ProductList">
            {products.map(product => <Product id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />)}
        </div>
    );
}