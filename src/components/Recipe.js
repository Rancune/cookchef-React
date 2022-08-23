import React, { useState } from "react";
import styles from "../assets/styles/components/Recipe.module.scss";
import imgRecipe from "../assets/images/ramen.jpg";

const Recipe = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={handleClick}
      className={`d-flex flex-column ${styles.recipe}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={imgRecipe} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
        <h3 className="mb-20">Recipe</h3>
        <i className={`${liked ? "text-primary" : ""} fa-solid fa-heart`}></i>
      </div>
    </div>
  );
};

export default Recipe;
