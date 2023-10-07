import React, {useState} from 'react'

export const PrimerComponente = () => {
    // let nombre = "Jhordan Julcamoro";
    let web = "JhordanJulcamoro.com";

    const [nombre, setNombre] = useState("Jhordan Julcamoro");

    let cursos = [
        "Master a",
        "Master b",
        "Master c",
        "Master d",
    ]

    const cambiarNombre = (e,nuevoNombre) => {
        setNombre(nuevoNombre)
    }
  return (
    <div>
        <h1>Mi primer componente</h1>
        <p> Este es mi primer componente</p>
        <p> Mi nombre es: <strong className={nombre.length >=4 ? 'verde':'rojo'}>{nombre} </strong> </p>
        <p> Mi web es: {web}</p>

        <input onChange={e => cambiarNombre(e,e.target.value)} placeholder="ingrese nombre" />
        &nbsp;
        <button onClick={e=> cambiarNombre(e,"Zuar")}>Cambiar nombre a Zuar</button>
        &nbsp;
        <button onClick={e=> {
            console.log("El valor guardado en tu estado es:",nombre);
        }} >Valor estado</button>
        <h2>Cursos: </h2>
        <ul>
            {
                cursos.map((curso,indice) =>{
                    return(
                          <li key={indice}>{curso}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
