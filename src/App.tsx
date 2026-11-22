
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';

import Home from './pages/homepage';
import Recordpage from './pages/recordpage';
// import Logout from './logout';
const App = () => {
  return (
    <div  className='bg-linear-to-r from-gray-50 via-blue-100 to-blue-50'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recordpage' element={<Recordpage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
