import React from 'react'
import './styleCarrito.css'

const Carrito = ({ carritoItems , isOpen, onClose, eliminarDelCarrito}) => {
    return (
        <div className={`carrito-drawer ${isOpen ? 'open' : ''}`}>
            <div className='carrito-header'>
                <h2 style={{color:"red"}}>Carrito de Compras</h2>
                <button className='carrito-close-button' onClick={onClose}>X</button>
            </div>
           
                <div className='carrito-content'>
                    {carritoItems.length > 0 ? (
                        console.log(carritoItems),
                        <ul className='carrito-items'>
                            {carritoItems.map((item, index) => (

                                <li key={index}>
                                    <img src={item.foto} alt={item.nombre} />
                                    <h3>{item.nombre}</h3>
                                    <p>Precio: ${item.precio}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <button onClick={() => eliminarDelCarrito(item)}>Eliminar</button>
                                </li>

                            ))
                            }
                        </ul>
                    ) : (
                        <p style={{ color: "red" }}>No hay productos en el carrito.</p>
                    )}
                </div>
                <button className='finalizar-compraBtn'>Finalizar Compra</button>

        </div>
    )
}

export default Carrito