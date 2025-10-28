// Тип действия
export const SET_USER_INFO = "SET_USER_INFO";

// Action creator
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});
