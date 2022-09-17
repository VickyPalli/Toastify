import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Setavatar from './Pages/Setavatar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/setavatar' element={<Setavatar/>}/>
        <Route path='/' element={<Chat/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
