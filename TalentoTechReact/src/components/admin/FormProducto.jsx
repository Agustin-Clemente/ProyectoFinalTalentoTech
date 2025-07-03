import React, { useState, useContext } from 'react';
import { AdminContext } from "../../context/AdminContext";


function FormularioProducto() {

    const { agregarProducto } = useContext(AdminContext);
    
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        foto: '',
        descripcionLarga: '',
    });
    const [errores, setErrores] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.stock || producto.stock <= 0) {
            nuevosErrores.stock = 'El stock debe ser mayor a 0.';
        }
        if (!producto.descripcionLarga.trim() || producto.descripcionLarga.length < 10) {
            nuevosErrores.descripcionLarga = 'La descripción debe tener al menos 10 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        agregarProducto(producto); 
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            foto: '',
            descripcionLarga: '',
        });
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text" name="nombre" value={producto.nombre} onChange={handleChange} required />
                {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={producto.precio} onChange={handleChange} required
                    min="0" />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
            </div>

            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    min="0"
                    required
                />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
            </div>
            <div>
                <label>Foto:</label>
                <input
                    type="text"
                    name="foto"
                    value={producto.foto || ''}
                    onChange={handleChange}
                    required
                />
                {errores.foto && <p style={{ color: 'red' }}>{errores.foto}</p>}
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    name="descripcionLarga"
                    value={producto.descripcionLarga || ''}
                    onChange={handleChange}
                    required
                />
                {errores.descripcionLarga && <p style={{ color: 'red' }}>{errores.descripcionLarga}</p>}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default FormularioProducto;