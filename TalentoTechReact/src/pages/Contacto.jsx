import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import '../components/estaticos/forms.css'

const Contacto = ({carrito, eliminarDelCarrito, vaciarCarrito}) => {
  return (
      <>
    <Header carritoItems={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />
    <main>
      <h1>Contacto</h1>
      <p>Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
      <h2>Formulario de Contacto</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      
    </main>
    <Footer />
    </>
    
  )
}

export default Contacto