import React, {useState,useEffect} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponet = () => {
  const [usuario,setUsuario] = useState('Jhordan Julcamoro');
  const [fecha, setFecha] = useState('01-01-1997');
  const [contador, setContador] = useState(0);

  const modUsuario = e => {
    setUsuario(e.target.value);
    // console.log('Ha habido un cambio en usuario');
  }

  useEffect(() => {
    console.log('Has cargado el componente');
  }, [])

  useEffect(() => {
    setContador(contador + 1);
    console.log('Has modificado el usuario ', contador);
  }, [usuario,fecha]) //se detectan 10 cambios o 10 veces el useEffect, se cambia el color de la etiqueta

  const cambiarFecha = e => {
    setFecha(Date.now())
  }

  return (
    <div>
      <h1>El efecto - hook useEffect</h1>

      <strong className={contador>=10? 'label-green':'label'}>{usuario}</strong>
      
      <strong> {fecha}</strong>
      <p>
        <input type='text'
          onChange={modUsuario}
          placeholder='Cambia el nombre'/>
        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>

      {/* {contador >= 20 && "Hemos superado el 20 en el contador"} */}
      {usuario === 'JHORDAN' && <AvisoComponent/>}
    </div>
  )
}
