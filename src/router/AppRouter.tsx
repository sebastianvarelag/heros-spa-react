import { Route, Routes } from 'react-router-dom'
import { HerosRouter } from '../heros/router/HerosRouter'
import { AuthRouter } from '../auth/router/AuthRouter'
import { PublicRouter } from './PublicRouter'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
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
