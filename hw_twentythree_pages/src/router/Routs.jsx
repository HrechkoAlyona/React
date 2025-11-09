import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Profile } from '../pages/Profile/Profile'
import { Register } from '../pages/Register/Register'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'
export const Routs = () => {
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
    {
      path: '/profile',
      component: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
  ]
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </Routes>
  )
}
