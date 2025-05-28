import React from 'react'
import './styleCarrito.css'

const Carrito = ({ carritoItems, isOpen, onClose, eliminarDelCarrito, vaciarCarrito }) => {

    const total = carritoItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className={`carrito-drawer ${isOpen ? 'open' : ''}`}>
            <div className='carrito-header'>
                <h2 style={{ color: "#d32f2f" }}>Carrito de Compras</h2>
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
                                <button className='btn-carrito' onClick={() => eliminarDelCarrito(item)}><i className="fa-solid fa-trash"></i></button>

                            </li>

                        ))
                        }
                    </ul>
                ) : (
                    <p style={{ color: "#d32f2f", textAlign: "center" }}>No hay productos en el carrito.</p>
                )}
            </div>
            {carritoItems.length > 0 ?
                <>
                    <div className='carrito-total'>
                        <h3>Total: ${total.toFixed(2)}</h3>


                        <button className='finalizar-compraBtn'>Finalizar Compra</button>


                        <button className='btn-carrito' style={{ marginTop: '12px' }} onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                        </div>
                    </> 
                : null}
                
        </div>
    )
}

export default Carrito