import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'

const Home = ({ productos, cargando, carrito, agregarAlCarrito, eliminarDelCarrito }) => {
  return (
    <>
      <Header carritoItems={carrito} eliminarDelCarrito={eliminarDelCarrito} />
      <main>
        <h1>Bienvenido a nuestro sitio web</h1>
        <p>Explora nuestros productos.</p>

{
          cargando ? (
            <p>Cargando productos...</p>
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