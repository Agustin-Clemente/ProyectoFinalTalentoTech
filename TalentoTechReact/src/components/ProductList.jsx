import React from 'react'
import Productos from './Productos'

const ProductList = ({productos, agregarAlCarrito}) => {
  return (
    <>
    <h2>Galería de productos</h2>
    <div className='galeria'>
      {productos.map(producto => (
        <Productos key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
      ))}
  </div>
    </>
  )
}

export default ProductList