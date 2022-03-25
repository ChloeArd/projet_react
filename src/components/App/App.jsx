import './App.css';

import {Header} from "../Header/Header";
import {ProductList} from "../ProductList/ProductList";
import {Categories} from "../Categories/Categories";
import {Cart} from "../Cart/Cart";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import {useEffect, useState} from "react";
import {FormCategory} from "../FormCategory/FormCategory";
import {FormProduct} from "../FormProduct/FormProduct";
import {Connection} from "../Connection/Connection";
import {Registration} from "../Registration/Registration";
import {Counter} from "../Counter/Counter";

function App() {

    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue vitae ligula finibus mollis. Cras tempor vel arcu hendrerit facilisis. Nunc non neque tristique, maximus dolor non, vestibulum mi.";

    const productsList = [
        {id: 1, category: 2, cart: 1, title: "Produit 1", image: image1, description: content, price: 230, stock: 12},
        {id: 2, category: 2, cart: 0, title: "Produit 2", image: image2, description: content, price: 230, stock: 35},
        {id: 3, category: 2, cart: 1, title: "Produit 3", image: image3, description: content, price: 230, stock: 27},
        {id: 4, category: 1, cart: 1, title: "Produit 4", image: image4, description: content, price: 230, stock: 60},
        {id: 5, category: 2, cart: 0, title: "Produit 5", image: image5, description: content, price: 230, stock: 0}
    ];

    const categoriesList = [
        {id: 0, name: "Tout"},
        {id: 1, name: "Autres"},
        {id: 2, name: "hardware"}
    ];

    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);
    const [category, setCategory] = useState(0);
    const [categories, setCategories] = useState([...categoriesList]);
    const [factor, setFactor] = useState(0);

    useEffect(() => {
        setFactor(Math.floor(Math.random() * 100));
    }, [setFactor, category]);

    if (isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

    return (
        <>
            <Header/>
            <div className="width_80">
                <Cart products={products} setIsProductUpdated={setIsProductUpdated}/>
                <div className="width_80_2">
                    <Categories setCategory={setCategory} categories={categories}/>
                    <ProductList category={category} products={products} setIsProductUpdated={setIsProductUpdated}/>
                </div>
            </div>
            <Counter factor={factor}/>
            <FormCategory />
            <FormProduct categories={categories}/>
            <Connection/>
            <Registration/>
        </>
    );
}

export default App;