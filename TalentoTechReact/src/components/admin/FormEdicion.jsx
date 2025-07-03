import React, { useState, useEffect, useContext } from 'react';
import { AdminContext } from "../../context/AdminContext";

function FormularioEdicion() {

    const { seleccionado, actualizarProducto } = useContext(AdminContext);

    const [producto, setProducto] = useState(seleccionado);

    

    useEffect(() => {
        setProducto(seleccionado)
    }, [seleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };

    const [errores, setErrores] = useState({});

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.descripcionLarga.trim() || producto.descripcionLarga.length < 10) {
            nuevosErrores.descripcionLarga = 'La descripción debe tener al menos 10 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    return (
        <form noValidate onSubmit={(e) => {
            e.preventDefault();
            if (!validarFormulario()) {
                return;
            }
            actualizarProducto(producto)
        }}>
            <h2>Editar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                />
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
            </div>
            <button type="submit">Actualizar Producto</button>
        </form>
    );
}
export default FormularioEdicion;