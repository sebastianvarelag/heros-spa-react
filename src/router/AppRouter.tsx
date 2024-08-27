import { Route, Routes } from 'react-router-dom'
import { HerosRouter } from '../heros/router/HerosRouter'
import { AuthRouter } from '../auth/router/AuthRouter'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'
import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export const AppRouter = () => {
  const { state } = useContext(AuthContext);

  console.log(state.isLoggedIn);
  
  
  return (
    <>
      <Routes>
        {/* <AuthRouter/> */}
        <Route path='/auth/*' element={
          <PublicRouter>
            <AuthRouter/>
          </PublicRouter>
          }></Route>
        {/* <HerosRouter/> */}
        <Route path='/*' element={
          <PrivateRouter>
            <HerosRouter/>
          </PrivateRouter>
        }></Route>
      </Routes>
    </>
  )
}
