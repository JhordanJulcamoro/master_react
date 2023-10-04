import React from 'react'

export const EventosComponente = () => {
  return (
    <div>
        <h1>Eventos en React</h1>

        {/* Evento click */}
        <h3>Evento onclick:: </h3>
        <button onClick={() => {
            console.log("Hola soy un evento click")
        }}>Dame Click</button>
    </div>
  )
}
