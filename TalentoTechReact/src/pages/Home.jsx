import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Spinner from '../components/estaticos/Spinner'
import { CartContext } from '../context/CartContext'

const Home = ({ agregarAlCarrito}) => {

  const {cargando} = useContext(CartContext)



  return (
    <>
      <Header  />
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
            <ProductList/>
          )
}
        

      </main>
      <Footer />
    </>
  )
}

export default Home