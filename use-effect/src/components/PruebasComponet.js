import React, {useState,useEffect} from 'react'

export const PruebasComponet = () => {
  const [usuario,setUsuario] = useState('Jhordan Julcamoro');
  const [fecha, setFecha] = useState('01-01-1997');

  const modUsuario = e => {
    setUsuario(e.target.value);
    // console.log('Ha habido un cambio en usuario');
  }

  useEffect(() => {
    console.log('Has cargado el componente');
  }, [])

  useEffect(() => {
    console.log('Has modificado el usuario');
  }, [usuario])

  const cambiarFecha = e => {
    setFecha(Date.now())
  }

  return (
    <div>
      <h1>El efecto - hook useEffect</h1>

      <strong>{usuario}</strong>
      
      <strong> {fecha}</strong>
      <p>
        <input type='text'
          onChange={modUsuario}
          placeholder='Cambia el nombre'/>
        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
    </div>
  )
}
