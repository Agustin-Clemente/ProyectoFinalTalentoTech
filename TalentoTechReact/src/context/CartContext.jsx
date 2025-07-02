import { createContext, useState, useEffect } from "react";
import {toast} from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [busqueda, setBusqueda] = useState('')

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

const productosFiltrados = productos.filter(producto =>
  producto?.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

const agregarAlCarrito = (producto, cantidad) => {
        toast.success(`Agregaste ${cantidad} ${producto.nombre} al carrito` , {
          position: "bottom-right"
        });

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
        toast.error(`Eliminaste ${producto.nombre} del carrito` , {
          position: "bottom-right"
        });

      Swal.fire({
        title: "Producto eliminado",
        icon: "success",
        confirmButtonColor: "#1565c0"
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
        icon: "success",
        confirmButtonColor: "#1565c0"
      });
    setCarrito([]);
    localStorage.removeItem('carrito');
    }
  });
  }

  return (
    <CartContext.Provider value={{ 
        carrito,
        productos,
        cargando,
        error,
        isAuthenticated,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        setIsAuthenticated,
        busqueda,
        setBusqueda,
        productosFiltrados
     }}>
      {children}
    </CartContext.Provider>
  );
}