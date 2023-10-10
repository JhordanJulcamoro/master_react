import React, { useState } from 'react'
import { UsuarioComponent } from './UsuarioComponent';

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState([]);

    const sendData = (e) => {
        e.preventDefault();
        let data = e.target;
        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            genero: data.genero.value,
            biografia: data.bio.value,
        }

        console.log(usuario)
        setUsuario(usuario);
    }
    return (
        <div>
            <h1>Formularios con REACT</h1>
            {usuario.biografia &&
                usuario.biografia.length >= 1 &&
                (
                    <UsuarioComponent usuario={usuario}></UsuarioComponent>
                )}

            <form onSubmit={sendData}>
                <input type="text" placeholder='Nombre: ' name='nombre' />
                <input type="text" placeholder="Apellido: " name='apellido' />
                <select name='genero'>
                    <option value="Hombre"> Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <textarea placeholder='Biografia' name='bio'></textarea>
                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}
