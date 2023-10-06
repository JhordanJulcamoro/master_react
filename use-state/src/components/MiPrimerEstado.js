import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /* 
    PROBLEMATICA 
    
    let nombre = "Jhordan Julcamoro"

    const cambiarNombre = e =>{
        nombre = "Pedro Carlos"
    } 
    */

    const [nombre, setNombre] = useState("Jhordan Julcamoro");

    const cambiarNombre = e =>{
        setNombre("Zuar Huaripata");
    }

    return (
    <div>
        <h3>Componente: 1er estado </h3>

        <strong> {nombre} </strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}
