import React from 'react'
import { Link } from 'react-router-dom'

export const Producto = ( {producto, handleDelete, handleUpdate} ) => {
    const {id, name, price, quantity} = producto;
  return (
    <>
        <h2>{name}</h2>
        <p>${price} - {quantity}</p>

        <button type='button' onClick={() => handleDelete(id)}>ELIMINAR</button>
        <Link to="/editar" state= {{ producto }}>
          <button type='button'>Editar</button>
        </Link>
    </>
  )
}
