import React, { useEffect, useState } from 'react'
import { api } from './api/productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Formulario } from './Components/Formulario'
import { ListadoProductos } from './Components/ListadoProductos'
import { Editar } from './Components/Editar';

export const App = () => {

  const [productos, setProductos] = useState([]);

  const handleAdd = async (productoNuevo) => {

    try {
			const response = await api.post('/productos', productoNuevo);
			setProductos([...productos, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await api.delete(`/productos/${id}`);
			const nuevoArreglo = productos.filter((producto) => producto.id !== id);
			setProductos(nuevoArreglo);
			
		} catch (error) {
			console.log(error);
			
		}
	};


  const readProducts = async () => {
		try {
			const request = await api.get('/productos');
			return request.data;
		} catch(error) {
			console.log(error);
		}
  };

  const handleUpdate = async (productoUpdate) => {
		console.log("Producto a actualizar: ",productoUpdate.id);

		try{
			const response = await api.put(
				`/productos/${productoUpdate.id}`,
				productoUpdate,
		);

		console.log(response);

		const newArray = productos.map((producto) => {
			return producto.id === response.data.id ? { ...response.data } : producto;
		});

		setProductos(newArray);

		} catch(error){
			console.log(error);
		}
	}

  useEffect(() => {
		const getAllProducts = async () => {
			const allProducts = await readProducts();
			if (allProducts) setProductos(allProducts);
		};
    getAllProducts();
	}, []);


  return (
    <>
		<Router>
			
			<Routes>
			<Route path="/" element={<Formulario handleAdd={handleAdd} />} />
			<Route path="/listado" element={<ListadoProductos productos={productos} handleDelete={handleDelete} />} />
				

				
				<Route path="/editar" element={<Editar handleUpdate={handleUpdate} />} />
				
			</Routes>
		</Router>
    </>
  )
}
