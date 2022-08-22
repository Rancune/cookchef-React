import React from "react";
import logo from "../assets/images/cookchef-d.png";
import styles from "../assets/styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo" />
      </div>
      <ul className={styles.headerList}>
        <button className={`mr-5 btn btn-reverse-primary`}>Whislist</button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
    </header>
  );
};

export default Header;
