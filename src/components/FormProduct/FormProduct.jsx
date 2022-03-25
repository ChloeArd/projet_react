import "./FormProduct.css";
import {useForm} from "react-hook-form";

export const FormProduct = function ({categories}) {

    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className="product-add-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Ajouter un produit</h1>
                <label htmlFor="name_product">Nom du produit</label>
                <input type="text" {...register('name')} required/>
                <label htmlFor="image_product">Image du produit</label>
                <input type="url" {...register('image')} required/>
                <label htmlFor="description_product">Description</label>
                <textarea rows="20" cols="20" {...register('description')} required/>
                <label htmlFor="price_product">Prix du produit</label>
                <input type="number" {...register('price')} required/>
                <label htmlFor="stock_product">Stock</label>
                <input type="number" {...register('stock')} required/>
                <label htmlFor="category_product">Catégorie</label>
                <select {...register("category")} required>
                    {categories.map(category => <option value={category.id}>{category.name}</option>)}
                </select>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    );
}