import React, { useState } from 'react'
import './styleProductos.css'
import { Link } from 'react-router-dom';

const Productos = ({producto, agregarAlCarrito}) => {

  const [cantidad, setCantidad] = useState(1);

  const aumentar = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  }

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <section className='card'>
        <div className='imagenContainer'>
            <img src={producto.foto} alt={`Imagen de ${producto.nombre}`} className='imagen'/>
        </div>

        <h3 className='nombre'>{producto.nombre}</h3>
        <p className='precio'>${producto.precio}</p>
        <p className='stock'>{producto.stock} disponibles</p>

        <div className='cantidadContainer'>
            <button className='cantidadBtn' onClick={restar}>-</button>
            <span>{cantidad}</span>
            <button className='cantidadBtn' onClick={aumentar}>+</button>
        </div>

        <button onClick={() => agregarAlCarrito(producto, cantidad)}>Añadir al carrito</button>
        <Link to={`/productos/${producto.id}`}>Ver detalles</Link>
    </section>
  )
}

export default Productos