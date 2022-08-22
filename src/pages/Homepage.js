import React from "react";
import styles from "../assets/styles/pages/Homepage.module.scss";
import Recipe from "../components/Recipe";

const Homepage = () => {
  return (
    <div className="flex-fill container p-20">
      <h2 className="my-30">Découvrez nos nouvelles recettes</h2>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
