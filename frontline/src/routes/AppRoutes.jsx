import {Routes,Route, useLocation} from 'react-router-dom'
import Home from '@/pages/Home'; 

const AppRoutes = () => {
 const location =useLocation("");
  return (
    <div className='transition' key={location.path} >
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
    </Routes>
    </div>
  )
}

export default AppRoutes