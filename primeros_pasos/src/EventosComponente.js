import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = () => {
    alert('Has Dado Click');
  }

  return (
    <div>
        <h1>Eventos en React</h1>

        {/* Evento click */}
        <h3>Evento onclick:: </h3>
        <button onClick={hasDadoClick}>Dame Click</button>
    </div>
  )
}
