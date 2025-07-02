import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import '../components/estaticos/styleEstatico.css'

const AcercaDe = ({ carrito, eliminarDelCarrito, vaciarCarrito }) => {
  return (
    <>
      <Header />
      <main>
        <h1>Acerca de</h1>

        <p >Bienvenido a nuestra página de Acerca de. Aquí encontrarás información sobre nuestra empresa, nuestra misión y visión, y el equipo que hace posible todo esto.</p>

        <h2 className='acerca-de'>Nuestra Misión</h2>
        <p>Nuestra misión es ofrecer productos de la más alta calidad y brindar un servicio excepcional a nuestros clientes.</p>

        <h2 className='acerca-de'>Nuestra Visión</h2>
        <p>Nuestra visión es ser líderes en el mercado, reconocidos por nuestra innovación y compromiso con la satisfacción del cliente.</p>
        
        <h2 className='acerca-de'>Nuestro Equipo</h2>
        <p>Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por lo que hacen.</p>
      </main>
      <Footer />
    </>
  )
}

export default AcercaDe