import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/admin/FormProducto";
import FormularioEdicion from "../components/admin/FormEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import "./adminStyle.css";

const Admin = () => {

    const { setIsAuthenticated } = useContext(CartContext)
    // const [open, setOpen] = useState(false);

    const {
        productos,
        loading,
        open,
        setOpen,
        openEditor,
        setOpenEditor,
        seleccionado,
        setSeleccionado,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
    } = useContext(AdminContext)

    const navigate = useNavigate()

    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <div className="navBar">
                        <ul >

                            <li >
                                <span >Admin</span>
                            </li>
                            <li >
                                <button className="navButton" onClick={() => {
                                    setIsAuthenticated(false);
                                    navigate('/');
                                    localStorage.removeItem('isAuth');
                                }}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <h1 className="encabezado">Panel Administrativo</h1>
                    <button className="agregarBtn" onClick={() => setOpen(true)}>Agregar producto nuevo</button>
                    {open && (<FormularioProducto onAgregar={agregarProducto} />)}
                    {openEditor && (<FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />)}
                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className='listItem'>
                                <img
                                    src={product.foto}
                                    alt={product.nombre}
                                    className="imagen"
                                />
                                <span>{product.nombre}</span>
                                <span>${product.precio}</span>
                                <div>
                                    <button className="editButton" onClick={() => {
                                        setOpenEditor(true)
                                        setSeleccionado(product)
                                        window.scrollTo({ top: 20, behavior: 'smooth' });
                                    }}><i className="fa-solid fa-pencil"></i></button>

                                    <button className="deleteButton" onClick={() => eliminarProducto(product.id)}><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
};

export default Admin;
