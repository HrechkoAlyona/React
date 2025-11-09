import { createSlice } from '@reduxjs/toolkit'

const getUserFromLocalStorage = () => {
  const users = localStorage.getItem('users') // true
  return users ? JSON.parse(users) : []
}
const getCurrentUserFromLocalStorage = () => {
  const currentUser = localStorage.getItem('currentUser')
  return currentUser ? JSON.parse(currentUser) : null
}

const initialState = {
  users: getUserFromLocalStorage(), //null || [{login:fdjvfnv, password: djcjdnjc}]
  currentUser: getCurrentUserFromLocalStorage(),
  isError: false,
  isSucces: false,
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const email = action.payload.email
      const password = action.payload.password

      const user = state.users.find((user) => user.email === email)
      if (!user) {
        state.isError = true
        state.message = 'Такого пользователя не существует'
        state.isSucces = false
        return
      }
      if (user.password !== password) {
        state.isError = true
        state.message = 'Неверный пароль'
        state.isSucces = false
        return
      }
      state.currentUser = user // {email: jsdnjc, password: 123}
      localStorage.setItem('currentUser', JSON.stringify(user))

      state.isError = false
      state.isSucces = true
      state.message = 'Вход выполнен успешно'
    },
    register: (state, action) => {
      const { email, password } = action.payload

      const isUserExist = state.users.find((user) => user.email === email)
      if (isUserExist) {
        state.isError = true
        state.message = 'пользователь с таким email уже существует'
        state.isSucces = false
        return
      }
      const newUser = { email, password }
      state.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(state.users))

      state.isSucces = true
      state.isError = false
      state.message = 'Регистрация прошла успешно'
    },
    logout: (state) => {
      state.currentUser = null
      localStorage.removeItem('currentUser')
      state.isError = false
      state.message = 'Вы вышли из системы'
      state.isSucces = true
    },
    resetState: (state) => {
      state.isError = false
      state.isSucces = false
      state.message = ''
    },
  },
})
export default authSlice.reducer
export const { login, logout, register, resetState } = authSlice.actions
