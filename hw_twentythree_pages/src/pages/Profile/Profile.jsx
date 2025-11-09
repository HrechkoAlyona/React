import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import styles from './Profile.module.css'

export const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser, message, isSucces } = useSelector((state) => state.auth)
  const handleClick = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className={styles.profile}>
      <h1>User {currentUser.email} authorized</h1>

      <div className={styles.userInfo}>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Password:</strong> {currentUser.password}
        </p>
      </div>

      <button onClick={handleClick} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  )
}
