import React from 'react'
import { Producto } from './Producto'
import './Estilos/estilos-Listado.css';

export const ListadoProductos = ( {productos, handleDelete} ) => {
  return (
    <section>
      <div className='caja'>
        <h1>Manejador de productos</h1>
        <h2>Listado de productos</h2>
        {productos.map((producto) => (
			<Producto producto={producto} key={producto.id} handleDelete={handleDelete}/>
		))}
      </div>
    </section>
  )
}
