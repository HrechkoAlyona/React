import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { resetState } from '../../store/authSlice'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        onClick={() => dispatch(resetState())}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        onClick={() => dispatch(resetState())}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        onClick={() => dispatch(resetState())}
      >
        Register
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        onClick={() => dispatch(resetState())}
      >
        Profile
      </NavLink>
    </nav>
  )
}
