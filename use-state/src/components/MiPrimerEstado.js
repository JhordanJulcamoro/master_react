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

    const cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo);
    }

    return (
    <div>
        <h3>Componente: 1er estado </h3>

        <strong> {nombre} </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e,"Zuar")}>Cambiar nombre por Zuar</button>
        &nbsp;
        <input type='text' onKeyUp={e => cambiarNombre(e,e.target.value)} placeholder='Cambia el nombre'/>
    </div>
  )
}
