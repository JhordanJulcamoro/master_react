import React, { useState } from 'react'

export const Crear = () => {

    let tituloComponente = "Añadir pelicula";
    const [peliculaState, setPeliculaState] = useState({
        id:'',
        titulo:'',
        descripcion:''
    });

    //desestructurar una variable
    const {titulo, descripcion} = peliculaState;

    const conseguirDatosForm = e => {
        e.preventDefault();
        
        let target = e.target;
        let titulo =target.titulo.value;
        let descripcion = target.descripcion.value;

        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //guardar en estado
        setPeliculaState(pelicula);

        //guardar en storage
        guardarEnStorage(pelicula);

        console.log(peliculaState)
    }

    const guardarEnStorage = pelicula => { 
        // Conseguir loe elementos que ya tenemos en localstorage
        let elementos = JSON.parse(localStorage.getItem("peliculas"));

        console.log(elementos);
        // Comprobar si es un array
        if(Array.isArray(elementos)){
            elementos.push(pelicula);
        }else {
            elementos = [pelicula];
        }

        // Guardar en el localstorage
        localStorage.setItem('peliculas', JSON.stringify(elementos));

        // Devolver objeto guardado
        return pelicula;
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
           {(titulo && descripcion) && "Haz creado: " + titulo}
            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    id="titulo"
                    placeholder="Titulo"
                    name='titulo' />
                <textarea
                    id="descripcion"
                    placeholder="Descripción"
                    name='descripcion'>
                </textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar"
                    name='save' />
            </form>
        </div>
    )
}
