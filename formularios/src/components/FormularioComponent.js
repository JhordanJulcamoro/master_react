import React, { useState } from 'react'
import { UsuarioComponent } from './UsuarioComponent';

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const sendData = (e) => {
        e.preventDefault();
        let data = e.target;
        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            genero: data.genero.value,
            biografia: data.biografia.value,
            enviar: data.enviar.value,
        }

        console.log(usuario)
        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let name_input = e.target.name;

        // Primera forma de return
        // setUsuario(estado_previo => {
        //     return {
        //         ...estado_previo,
        //         [name_input]: e.target.value
        //     }
        // })

        // Segunda forma de return
        setUsuario(estado_previo => ({
            ...estado_previo,
            [name_input]: e.target.value
        }))

        console.log(usuario);
    }
    return (
        <div>
            <h1>Formularios con REACT</h1>
            {usuario.enviar &&
                (
                    <UsuarioComponent usuario={usuario}></UsuarioComponent>
                )}

            <form onSubmit={sendData}>
                <input type="text" placeholder='Nombre: ' name='nombre' onChange={cambiarDatos} />
                <input type="text" placeholder="Apellido: " name='apellido' onChange={cambiarDatos} />
                <select name='genero' onChange={cambiarDatos}>
                    <option value="Hombre"> Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <textarea placeholder='Biografia' name='biografia' onChange={cambiarDatos}></textarea>
                <input type='submit' value="Enviar" name='enviar' />
            </form>
        </div>
    )
}
