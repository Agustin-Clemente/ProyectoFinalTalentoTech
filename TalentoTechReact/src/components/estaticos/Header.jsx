import React from 'react'
import { NavLink } from 'react-router-dom'
import './styleEstatico.css'
import { useState } from 'react'
import Carrito from '../Carrito'

const Header = () => {


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
          <li><NavLink  to="/" className={({ isActive }) => isActive ? 'activo' : 'link'}>Inicio</NavLink></li>
          <li><NavLink to="/acerca-de" className={({ isActive }) => isActive ? 'activo' : 'link'}>Sobre nosotros</NavLink></li>
          <li><NavLink to="/productos" className={({ isActive }) => isActive ? 'activo' : 'link'}>Galería de productos</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'activo' : 'link'}>Contacto</NavLink></li>
          <li>
            <button className='btn-carrito' onClick={toggleCarrito}><i className="fa-solid fa-cart-shopping"></i></button>
            <Carrito isOpen={carritoOpen} onClose={toggleCarrito}></Carrito>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header