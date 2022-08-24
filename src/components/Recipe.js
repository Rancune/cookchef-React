import React, { useState } from "react";
import styles from "../assets/styles/components/Recipe.module.scss";

const Recipe = ({ title, image }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={handleClick}
      className={`d-flex flex-column ${styles.recipe}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={image} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
        <h3 className="mb-20">{title}</h3>
        <i className={`${liked ? "text-primary" : ""} fa-solid fa-heart`}></i>
      </div>
    </div>
  );
};

export default Recipe;
