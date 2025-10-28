import { SET_USER_INFO } from "./actions";

// Начальное состояние
const initialState = {
  name: "Guest",
  status: "Offline",
};

// Редьюсер
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      };
    default:
      return state;
  }
};
