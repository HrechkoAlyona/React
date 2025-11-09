import { useSelector } from 'react-redux'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Routs } from './router/Routs'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const { currentUser } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('profile')
    }
  }, [])
  return (
    <>
      <Navbar />
      <Routs />
    </>
  )
}

export default App
