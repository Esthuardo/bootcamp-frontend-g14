import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ChristopherAcosta from './pages/Otros/ChristopherAcosta'
import LayoutBase from './layouts/LayoutBase'

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </LayoutBase>
        
      </BrowserRouter>
    </>
  )
}

export default App
