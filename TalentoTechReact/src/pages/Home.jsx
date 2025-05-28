import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'

const Home = ({ productos, cargando, carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }) => {
  return (
    <>
      <Header carritoItems={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />
      <main>
        <h1>Bienvenido a nuestro sitio web</h1>
        <p>Explora nuestros productos.</p>

{
          cargando ? (
             <>
            <Spinner/>
            <h2>Cargando productos...</h2>
            </>
          ) : (
            <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
          )
}
        

      </main>
      <Footer />
    </>
  )
}

export default Home