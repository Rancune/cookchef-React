import React from "react";
import styles from "../assets/styles/components/HeaderMenuResponsive.module.scss";

const HeaderMenuResponsive = () => {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>Whislist</li>
      <li>Connexion</li>
    </ul>
  );
};

export default HeaderMenuResponsive;
