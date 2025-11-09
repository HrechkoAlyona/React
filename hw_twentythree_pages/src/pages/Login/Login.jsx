import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, resetState } from '../../store/authSlice'
import styles from './Login.module.css'

export const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const { email, password } = userData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { currentUser, isError, isSucces, message } = useSelector(
    (state) => state.auth
  )
  const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value

    setUserData({ ...userData, [inputName]: inputValue })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      dispatch(resetState())
    }, 3000)
    dispatch(login({ email, password }))

    setUserData({ email: '', password: '' })
    setTimeout(() => {
      navigate('/profile')
    }, 1000)
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={userData.email}
        type="email"
        className={styles.input}
      />
      <input
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={userData.password}
        type="password"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Login
      </button>
      <p
        className={styles.message}
        style={{ color: isError ? 'red' : isSucces ? 'green' : 'black' }}
      >
        {message}
      </p>
    </form>
  )
}
