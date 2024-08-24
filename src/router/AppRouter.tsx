import { Route, Routes } from 'react-router-dom'
import { HerosRouter } from '../heros/router/HerosRouter'
import { AuthRouter } from '../auth/router/AuthRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <AuthRouter/> */}
        <Route path='/auth/*' element={<AuthRouter/>}/>
        {/* <HerosRouter/> */}
        <Route path='/*' element={<HerosRouter/>}/>
      </Routes>
    </>
  )
}
