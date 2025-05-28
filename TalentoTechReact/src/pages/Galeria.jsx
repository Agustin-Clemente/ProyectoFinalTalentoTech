import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'

const Galeria = ({productos, cargando, carrito, agregarAlCarrito, eliminarDelCarrito}) => {
  return (
      <>
    <Header carritoItems={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    <main>
       <div>Galeria</div>
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

export default Galeria