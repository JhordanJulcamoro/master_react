import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert('Has Dado Click: ' + nombre);
  }

  return (
    <div>
        <h1>Eventos en React</h1>

        {/* Evento click */}
        <h3>Evento onclick:: </h3>
        <button onClick={e => hasDadoClick(e,"Jhordan")}>Dame Click</button>
    </div>
  )
}
