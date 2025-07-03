import { createContext, useEffect, useState } from "react";
export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)
    const [seleccionado, setSeleccionado] = useState(null)
    const [openEditor, setOpenEditor] = useState(false)
    const apiUrl = 'https://655cc0a425b76d9884fde4c9.mockapi.io/productos'


    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Ocurrió un error',
                    text: error.message || 'No se pudieron cargar los productos',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            setLoading(false)
            Swal.fire({
                title: 'Ocurrió un error',
                text: error.message || 'No se pudieron cargar los productos',
                icon: 'error',
                confirmButtonColor: '#d33'
            });

            console.log('Error al cargar productos ', error);

        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                Swal.fire({
                    title: 'Ocurrió un error',
                    text: error.message || 'No se pudo agregar el producto',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
                throw new Error('Error al agregar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                text: "Producto agregado correctamente!",
                icon: "success",
                confirmButtonColor: "#1565c0",
            });
            cargarProductos()
            setOpen(false)
        } catch (error) {
            console.log(error.message);

        }
    }

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) {
                Swal.fire({
                    title: 'Ocurrió un error',
                    text: error.message || 'No se pudo editar el producto',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
                throw new Error('Error al editar producto')
            }
            const data = await respuesta.json()
            Swal.fire({
                text: "Producto editado correctamente!",
                icon: "success",
                confirmButtonColor: "#1565c0",
            });
            setOpenEditor(false)
            setSeleccionado(null)
            cargarProductos()
        } catch (error) {
            console.log(error.message);

        }
    }

    const eliminarProducto = async (id) => {
        Swal.fire({
            title: "¿Confirmas que deseas eliminar este producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1565c0",
            cancelButtonColor: "#d32f2f",
            confirmButtonText: "Si, eliminalo",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const respuesta = await fetch(`${apiUrl}/${id}`, {
                        method: 'DELETE',
                    });
                    if (!respuesta.ok) {
                        Swal.fire({
                            title: 'Ocurrió un error',
                            text: error.message || 'No se pudo eliminar el producto',
                            icon: 'error',
                            confirmButtonColor: '#d33'
                        });
                        throw new Error('Error al eliminar producto')
                    }

                    Swal.fire({
                        text: "Producto Eliminado correctamente!",
                        icon: "error",
                        confirmButtonColor: "#1565c0",
                    });
                    cargarProductos();
                } catch (error) {
                    alert('Hubo un problema al eliminar el producto');
                }
            }
        });
    }

    return (
        <AdminContext.Provider value={{
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
        }}>
            {children}
        </AdminContext.Provider>
    )
}