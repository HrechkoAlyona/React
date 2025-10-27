import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

const CatImage = () => {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCat = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.thecatapi.com/v1/images/search");
      setCatUrl(response.data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Random Cat Image</h2>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <img src={catUrl} alt="Random Cat" className={styles.image} />
      )}

      <button onClick={fetchCat} className={styles.button}>
        Load New Image
      </button>
    </div>
  );
};

export default CatImage;
