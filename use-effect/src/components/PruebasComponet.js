import React, {useState,useEffect} from 'react'

export const PruebasComponet = () => {
  const [usuario,setUsuario] = useState('Jhordan Julcamoro');

  const modUsuario = e => {
    setUsuario(e.target.value);
    // console.log('Ha habido un cambio en usuario');
  }

  useEffect(() => {
    console.log('Has cargado o modificado el componente');
  })

    
  return (
    <div>
      <h1>El efecto - hook useEffect</h1>

      <strong>{usuario}</strong>
      <p>
        <input type='text'
          onChange={modUsuario}
          placeholder='Cambia el nombre'/>
      </p>
    </div>
  )
}
