import "./Connection.css";
import {useForm} from "react-hook-form";

export const Connection = function () {

    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className="connection-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Connexion</h1>
                <label htmlFor="email_user">Email</label>
                <input type="email" {...register('email')} required/>
                <label htmlFor="password_user">Mot de passe</label>
                <input type="password" {...register('password')} required/>
                <input type="submit" value="Se connecter"/>
            </form>
        </div>
    );
}