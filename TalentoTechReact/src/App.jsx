import { useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import DetalleProducto from './components/DetalleProducto'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'
import { CartContext } from './context/CartContext'

function App() {
  
  const { isAuthenticated } = useContext(CartContext)


  return (
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<AcercaDe/>} />
        <Route path="/productos" element={<Galeria />} />
        <Route path='/productos/:id' element={<DetalleProducto />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin/> </RutaProtegida>} />
        <Route path='/login' element={<Login/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    
  )
}

export default App
