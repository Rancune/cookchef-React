import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../Admin/components/RecipeForm.module.scss";

const AuthForm = () => {
  let defautlValues = {
    email: "",
    password: "",
  };

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({
    defautlValues,
  });

  const submit = async (values) => {
    try {
      clearErrors();
      const response = await fetch("http://localhost:3333/api/users/login", {
        method: postMessage,
        headers: {
          Accept: "application/json",
          "Conten-type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
      }
    } catch (error) {
      console.log(error);
      setError("generic", {
        type: "generic",
        message: "Il y a eu une erreur",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}>
      <h2>Se connecter</h2>
      <div className="d-felx flex-column mb-20">
        <label>Email</label>
        <input {...register("email")} type="email" placeholder="email"></input>
        <p>Error</p>
      </div>
      <div className="d-felx flex-column mb-20">
        <label>Mot de passe</label>
        <input
          {...register("password")}
          type="password"
          placeholder="password"></input>
        <p>Error</p>
      </div>
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
