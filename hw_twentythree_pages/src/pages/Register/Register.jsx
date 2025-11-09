import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, register, resetState } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import styles from './Register.module.css'

export const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { email, password, confirmPassword } = formData
  const { message, isError, isSucces, currentUser } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value

    setFormData({ ...formData, [inputName]: inputValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      dispatch(resetState())
    }, 3000)
    if (password !== confirmPassword) {
      alert('Пароли не совпадают')
      return
    }
    if (password.length < 6 && password.length > 12) {
      alert('Пароль должен быть не менее 6 символов и не более 12 ')
      return
    }
    dispatch(register({ email, password }))
    setFormData({ email: '', password: '', confirmPassword: '' })
    setTimeout(() => {
      navigate('/login')
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
        onChange={handleChange}
        name="email"
        value={email}
        type="email"
      />
      <input
        placeholder="Password"
        onChange={handleChange}
        name="password"
        value={password}
        type="password"
      />
      <input
        placeholder="Confirm password"
        onChange={handleChange}
        name="confirmPassword"
        value={confirmPassword}
        type="password"
      />
      <button type="submit">Register</button>

      {message && (
        <p style={{ color: isError ? 'red' : isSucces ? 'green' : 'black' }}>
          {message}
        </p>
      )}
    </form>
  )
}
