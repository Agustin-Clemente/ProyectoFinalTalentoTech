import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div>404</div>
    <button style={{ marginTop: '12px' }}><Link to="/">Volver al inicio</Link></button>
    </>
  )
}

export default NotFound