import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = ({ agregarAlCarrito}) => {

const {productos} = useContext(CartContext)

  return (
    <>
    <h2>Galería de productos</h2>
    <div className='galeria'>
      { Array.isArray(productos) && productos.map(producto => ( //tuve que agregar el Array.isArray para evitar errores si productos no es un array, porque cuando fuerzo el error la api devuelve "Not Found" en lugar de un array vacío, entonces me salia error al hacer el map porque no recibía un array
        <Productos key={producto.id} producto={producto} />
      ))}
  </div>
    </>
  )
}

export default ProductList