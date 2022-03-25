import "./Registration.css";
import {useForm} from "react-hook-form";

export const Registration = function () {

    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className="registration-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Inscription</h1>
                <label htmlFor="firstname_user">Prénom</label>
                <input type="text" {...register('firstname')} required/>
                <label htmlFor="lastname_user">Nom de famille</label>
                <input type="text" {...register('lastname')} required/>
                <label htmlFor="email_user">Email</label>
                <input type="email" {...register('email')} required/>
                <label htmlFor="password_user">Mot de passe</label>
                <input type="password" {...register('password')} required/>
                <label htmlFor="repeat_password_user">Répétition du mot de passe</label>
                <input type="password" {...register('repeatPassword')} required/>
                <input type="submit" value="S'inscrire"/>
            </form>
        </div>
    );
}