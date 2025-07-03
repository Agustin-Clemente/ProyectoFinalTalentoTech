import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaProtegida = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    Swal.fire({
      icon: "error",
      title: "Debes iniciar sesión para ver esta página",
      text: "Serás redirigido a la página de inicio de sesión.",
      confirmButtonColor: "#1565c0"
    });
    return <Navigate to="/login" replace />
  }
  return (
    <div>{children}</div>
  )
}

export default RutaProtegida