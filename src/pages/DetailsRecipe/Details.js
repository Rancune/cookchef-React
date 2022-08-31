import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiContext";

const Details = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState([]);
  const url = useContext(ApiContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      const id = params.id;
      const response = await fetch(`${url}/${id}`);
      if (response.ok) {
        const newRecipe = await response.json();
        setRecipe(newRecipe);
      }
    };
    fetchRecipe();
  }, [url, params.id]);

  console.log(recipe);

  return (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  );
};

export default Details;
