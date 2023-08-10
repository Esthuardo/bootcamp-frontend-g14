import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import ChristopherAcosta from './pages/ChristopherAcosta'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home </Link>
          <Link to='/login'>Login </Link>
          <Link to='/pruebas'>Prueba </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prueba' element={<ChristopherAcosta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
