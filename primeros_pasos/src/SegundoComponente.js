import React from 'react'

export const SegundoComponente = () => {

    const libros = [
        "Harry Potter",
        "Juego de tronos",
        "Clean code"
    ]

  return (
    <div className='segundo-componente'>
        <h1> Listado de libros</h1>
       <ul>
        <li>{libros[0]}</li>
        <li>{libros[1]}</li>
        <li>{libros[2]}</li>
        </ul>
    </div>
  )
}
