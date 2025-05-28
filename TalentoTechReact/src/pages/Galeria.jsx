import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'

const Galeria = ({productos, cargando, carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito}) => {
  return (
      <>
    <Header carritoItems={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />
    <main>
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

export default Galeria