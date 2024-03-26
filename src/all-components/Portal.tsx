import { Navigation } from './Navigation'
import { Login } from './Login'
import { Route,Routes } from 'react-router-dom'

const Portal = () => {
  return (
  <>
   <Routes>
    <Route path='/' element={ <Navigation />}></Route>
    <Route path='/login' element={ <Login />}></Route>
   </Routes>

  </>
  )
}

export default Portal