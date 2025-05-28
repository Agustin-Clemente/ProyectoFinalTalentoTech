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

 /*  useEffect(() => {
    fetch('https://655cc0a425b76d9884fde4c9.mockapi.io/prod')
      .then(response => response.json())
      .then(data => {
        setProductos(data)
        setCargando(false)
      })
      .catch(error => {
        Swal.fire({
  icon: "error",
  title: "No se pueden cargar los productos",
});
        console.error('Error fetching products:', error)
        setError(true)
        setCargando(false)
      })
  }, []) */

  //Tuve que hacerlo asi para que me tome bien el error y poder ver el Swal
  useEffect(() => {
  fetch('https://655cc0a425b76d9884fde4c9.mockapi.io/productos')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      setProductos(data)
      setCargando(false)
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error al cargar los productos",
      });
      console.error('Error fetching products:', error)
      setError(true)
      setCargando(false)
    })
}, [])

  const agregarAlCarrito = (producto, cantidad) => {
    Swal.fire({
  title: "¡Producto agregado!",
  icon: "success",
  draggable: true,
  confirmButtonText: "Aceptar",
  confirmButtonColor: "#1565c0",
  background: "#f0f0f0",
});
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
  Swal.fire({
    title: "¿Confirmas que deseas eliminar este producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1565c0",
    cancelButtonColor: "#d32f2f",
    confirmButtonText: "Si, eliminalo",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Producto eliminado",
        icon: "success"
      });
      setCarrito(prevCarrito => {
        return prevCarrito.filter(item => item.id !== producto.id);
      });
    }
  });
}

  const vaciarCarrito = () => {
    Swal.fire({
    title: "¿Confirmas que deseas vaciar el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1565c0",
    cancelButtonColor: "#d32f2f",
    confirmButtonText: "Si, vacialo",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Carrito vaciado",
        icon: "success"
      });
    setCarrito([]);
    }
  });
  }


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos} cargando={cargando} carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/acerca-de" element={<AcercaDe carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito}/>} />
        <Route path="/productos" element={<Galeria agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} productos={productos} cargando={cargando} carrito={carrito} vaciarCarrito={vaciarCarrito}/>} />
        <Route path='/productos/:id' element={<DetalleProducto productos={productos} carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito}/>} />
        <Route path="/contacto" element={<Contacto carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito}/>} />

        <Route path='/admin' element={<RutaProtegida isAuthenticated={isAuthenticated}> <Admin/> </RutaProtegida>} />
        <Route path='/login' element={<Login/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  )
}

export default App
