import React from 'react'
import { Navigate } from 'react-router-dom'

const RutaProtegida = ({isAuthenticated, children}) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
  return (
    <div>{children}</div>
  )
}

export default RutaProtegida