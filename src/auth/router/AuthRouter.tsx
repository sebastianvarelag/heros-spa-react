import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<Navigate to={'login'} />} />
      </Routes>
    </>
  )
}
