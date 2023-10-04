import React from 'react'

export const TercerComponente = (props) => {
    console.log(props);

  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{props.nombre}</li>
            <li>{props.apellido}</li>
            <li>{props.ficha.altura}</li>
            <li>{props.ficha.grupo}</li>
        </ul>
    </div>
  )
}
