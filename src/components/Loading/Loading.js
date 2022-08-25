import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-conten-center flex-fil">
      <i className={`fa-solid fa-spinner ${styles.spinner}`}></i>
      <h2>Loading</h2>
    </div>
  );
};

export default Loading;
