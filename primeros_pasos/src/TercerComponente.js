import React from 'react'

export const TercerComponente = ({nombre,apellido,ficha}) => {

  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.grupo}</li>
        </ul>
    </div>
  )
}
