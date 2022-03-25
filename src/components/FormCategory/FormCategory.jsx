import "./FormCategory.css";
import {useForm} from "react-hook-form";

export const FormCategory = function () {

    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className="category-add-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Ajouter une catégorie</h1>
                <label htmlFor="name_category">Nom de la catégorie</label>
                <input type="text" {...register('name')}/>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    );
}