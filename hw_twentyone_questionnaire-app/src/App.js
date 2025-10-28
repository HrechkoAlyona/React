import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questionnaire</h1>
      <div className={styles.questionsContainer}>
        {questions.map((q) => (
          <Question key={q.id} {...q} />
        ))}
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit
        </button>
        <Result />
      </div>
    </div>
  );
};

export default App;
