import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './estaticos/Header';
import Footer from './estaticos/Footer';
import './styleProductos.css';
import { CartContext } from '../context/CartContext';

const DetalleProducto = () => {

    const {productos, agregarAlCarrito} = useContext(CartContext);

    const { id } = useParams();
    const producto = productos.find(item => item.id === id);

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
        <>
            <Header />

            <main>
                <h1>Detalles del producto</h1>
                {producto ? (

                    <>
                        <section className='card-detalle'>
                            <div className='imagenContainer-detalle'>
                                <img src={producto.foto} alt={`Imagen de ${producto.nombre}`} className='imagen' />
                            </div>

                            <h3 className='nombre'>{producto.nombre}</h3>
                            <p className='precio'>${producto.precio}</p>
                            <p className='stock'>{producto.stock} disponibles</p>
                            <p>{producto.descripcionLarga} disponibles</p>

                            <div className='cantidadContainer'>
                                <button className='cantidadBtn' onClick={restar}>-</button>
                                <span>{cantidad}</span>
                                <button className='cantidadBtn' onClick={aumentar}>+</button>
                            </div>

                            <button className='cantidadBtn' onClick={() => agregarAlCarrito(producto, cantidad)}>Añadir al carrito</button>
                            <button className='cantidadBtn' style={{ marginTop: '12px' }}><Link to="/" style={{ color: 'white' }}>Volver al inicio</Link></button>
                        </section>
                    </>
                ) : (
                    <>
                        <p>Producto no encontrado</p>
                        <button style={{ marginTop: '12px' }}><Link to="/" style={{ color: 'white' }}>Volver al inicio</Link></button>
                    </>
                )}
            </main>


            <Footer />
        </>
    )
}

export default DetalleProducto