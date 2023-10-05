import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert('Has Dado Click: ' + nombre);
  }

  function hasDadoDobleClick(e) {
    alert('Has dado doble Click: ')
  }
  return (
    <div>
      <h1>Eventos en React</h1>

      <h3>Evento onclick:: </h3>
      <p>
        {/* Evento click */}
        <button onClick={e => hasDadoClick(e, "Jhordan")}>Dame Click</button>
      </p>

      <h3>Evento ondobleclick:: </h3>
      <p>
        {/* Evento doble click */}
        <button onDoubleClick={hasDadoDobleClick}>Dame doble Click</button>

      </p>
    </div>
  )
}
