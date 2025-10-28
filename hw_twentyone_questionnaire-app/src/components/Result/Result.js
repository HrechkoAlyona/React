import React from "react";
import { useSelector } from "react-redux";
import styles from "./Result.module.css";

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score);
  const submitted = useSelector((state) => state.questionnaire.submitted);

  if (!submitted) return null;

  return <h2 className={styles.resultText}>Your Score: {score}</h2>;
};

export default Result;
