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
        <h1>Te damos la bienvenida a Formality</h1>
        <h2>Somos una tienda especializada en brindar indumentaria y accesorios de calidad para personas de buen gusto, destacando estilos clásicos para toda ocasión</h2>
        <h3>Explora nuestros productos.</h3>

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