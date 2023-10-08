import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert('Componente montado!!!');

        //Cuando el componente se desmonta
        return () => {
            alert('Componente desmontador!');
        }
    },[]); //Se ejecuta una vez porque le paso el array vacio

  return (
    <div>
        <hr />
        {/* <h3> Hemos superado los 20 cambios</h3> */}
        <h3> Saludos Jhordan</h3>
        <button onClick={e => {
            alert('Benvenido');
        }}> Mostrar alerta</button>
    </div>
  )
}
