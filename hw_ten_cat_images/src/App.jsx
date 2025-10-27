import React from "react";
import CatImage from "./components/CatImage";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <CatImage />
      </div>
    </div>
  );
};

export default App;
