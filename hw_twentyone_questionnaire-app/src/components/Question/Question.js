import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

const Question = ({ id, text, options }) => {
  const dispatch = useDispatch();
  const answer = useSelector(
    (state) => state.questionnaire.questions.find((q) => q.id === id)?.answer
  );

  const handleChange = (e) => {
    dispatch(answerQuestion({ id, answer: e.target.value }));
  };

  return (
    <div className={styles.questionBlock}>
      <p className={styles.questionText}>{text}</p>
      <div className={styles.options}>
        {options.map((opt, index) => (
          <label key={index} className={styles.optionLabel}>
            <input
              type="radio"
              name={`q${id}`}
              value={opt}
              checked={answer === opt}
              onChange={handleChange}
              className={styles.optionInput}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
