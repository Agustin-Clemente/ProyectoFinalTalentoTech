import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import DetalleProducto from './components/DetalleProducto'
import Login from './pages/Login'
import Admin from './pages/Admin'
import RutaProtegida from './auth/RutaProtegida'

function App() {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch('https://655cc0a425b76d9884fde4c9.mockapi.io/productos')
      .then(response => response.json())
      .then(data => {
        setProductos(data)
        setCargando(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setError(true)
        setCargando(false)
      })
  }, [])

  const agregarAlCarrito = (producto, cantidad) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad }];
      }
    });
  }

  const eliminarDelCarrito = (producto) => {
    setCarrito(prevCarrito => {
      return prevCarrito.filter(item => item.id !== producto.id);
    });
  }

  const actualizarCantidad = (productoId, cantidad) => {
    setCarrito(prevCarrito => {
      return prevCarrito.map(item =>
        item.id === productoId ? { ...item, cantidad } : item
      );
    });
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos} cargando={cargando} carrito={carrito} />} />
        <Route path="/acerca-de" element={<AcercaDe carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} />
        <Route path="/productos" element={<Galeria agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos} cargando={cargando} carrito={carrito} />} />
        <Route path='/productos/:id' element={<DetalleProducto productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} />} />
        <Route path="/contacto" element={<Contacto carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin/> </RutaProtegida>} />
        <Route path='/login' element={<Login/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  )
}

export default App
