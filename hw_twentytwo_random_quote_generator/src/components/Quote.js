import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quote/quoteSlice";
import styles from "./Quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { quote, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Quote Generator</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className={styles.error}>Error: {error}</p>}
      {status === "succeeded" && (
        <>
          <p className={styles.text}>"{quote}"</p>
          <p className={styles.author}>- {author}</p>
        </>
      )}
      <button className={styles.button} onClick={handleNewQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;
