import React from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import { useState } from 'react'
import Carrito from '../Carrito'

const Header = ({ carritoItems, eliminarDelCarrito, vaciarCarrito }) => {

  const [carritoOpen, setCarritoOpen] = useState(false);
  const toggleCarrito = () => {
    setCarritoOpen(!carritoOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);
  

  return (
    <header>
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <li><Link to="/" className='link'>Inicio</Link></li>
          <li><Link to="/acerca-de" className='link'>Sobre nosotros</Link></li>
          <li><Link to="/productos" className='link'>Galería de productos</Link></li>
          <li><Link to="/contacto" className='link'>Contacto</Link></li>
          <li>
            <button className='btn-carrito' onClick={toggleCarrito}><i className="fa-solid fa-cart-shopping"></i></button>
            <Carrito eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} carritoItems={carritoItems} isOpen={carritoOpen} onClose={toggleCarrito}></Carrito>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header