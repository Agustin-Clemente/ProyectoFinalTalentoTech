import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <button style={{ marginTop: '12px' }}><Link to="/" style={{ color: 'white' }}>Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound