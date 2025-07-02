import React, {useState} from 'react'

const FormularioProducto = ({ onAgregar }) => {
const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    stock: '',
    foto: '',
    descripcionLarga: ''
});
const [errores, setErrores] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    let errores = {};
    if (!producto.nombre) errores.nombre = "El nombre es requerido";
    if (!producto.precio) errores.precio = "El precio es requerido";
    if (!producto.stock) errores.stock = "El stock es requerido";
    if (!producto.foto) errores.foto = "La foto es requerida";
    if (!producto.descripcionLarga) errores.descripcionLarga = "La descripción larga es requerida";
    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onAgregar(producto);
      setProducto({
        nombre: '',
        precio: '',
        stock: '',
        foto: '',
        descripcionLarga: ''
      });
      setErrores({});
    }
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <h2>Agregar producto</h2>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange} required
          />
          {errores.nombre && <p>{errores.nombre}</p>}
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange} required
          />
          {errores.precio && <p>{errores.precio}</p>}
        </div>
        <div>
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={handleChange} required
          />
          {errores.stock && <p>{errores.stock}</p>}
        </div>
        <div>
          <label>Foto</label>
          <input
            type="text"
            name="foto"
            value={producto.foto}
            onChange={handleChange} required
          />
          {errores.foto && <p>{errores.foto}</p>}
        </div>
        <div>
          <label>Descripción Larga</label>
          <textarea
            name="descripcionLarga"
            value={producto.descripcionLarga}
            onChange={handleChange} required
          />
          {errores.descripcionLarga && <p>{errores.descripcionLarga}</p>}
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  )
}

export default FormularioProducto