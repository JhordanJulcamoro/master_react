import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert('Has Dado Click: ' + nombre);
  }

  function hasDadoDobleClick(e) {
    alert('Has dado doble Click: ')
  }

  const hasEntrado = (e,accion) =>{
    alert(`has ${accion} a la caja con el mouse!!`)
  }

  const hasSalido = (e,accion) =>{ 
    alert(`has ${accion} de la caja con el mouse!!`)
  }

  const estasDentro = e =>{
    console.log("Estas dentro del input, introduce tu nombre");
  }

  const estasFuera = e =>{ 
    console.log("Estas fuera del input");
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

      <h3>Evento mouseEnter:: </h3>
      <div id='caja' 
        onMouseEnter={e => hasEntrado(e,"entrado")}
        onMouseLeave={e => hasSalido(e,"salido")}>
        {/* Evento mouse enter */}
        Pasa por encima!!
      </div>

      <h3>Evento onFocus & onBlur:: </h3>
      <p> 
        <input type='text' 
        onFocus={estasDentro} 
        onBlur={estasFuera}
        placeholder='Introduce tu nombre'/>
      </p>

    </div>
  )
}
