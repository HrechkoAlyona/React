import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Question 1?", options: ["Option 1", "Option 2"], correct: "Option 1", answer: null },
    { id: 2, text: "Question 2?", options: ["Option 1", "Option 2"], correct: "Option 2", answer: null },
    { id: 3, text: "Question 3?", options: ["Option 1", "Option 2"], correct: "Option 1", answer: null },
    { id: 4, text: "Question 4?", options: ["Option 1", "Option 2"], correct: "Option 1", answer: null },
    { id: 5, text: "Question 5?", options: ["Option 1", "Option 2"], correct: "Option 2", answer: null },
  ],
  score: 0,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const question = state.questions.find((q) => q.id === id);
      if (question) question.answer = answer;
    },
    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach((q) => {
        if (q.answer === q.correct) score++;
      });
      state.score = score;
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
