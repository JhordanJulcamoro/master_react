import React from 'react'

export const UsuarioComponent = (props) => {
    console.log("props", props)
    return (
        <div>
            <h3>Datos del usuario</h3>
            <div className='info_usuario label-gray'> {props.usuario.nombre} {props.usuario.apellido} es de genero {props.usuario.genero} y su biografia es la siguiente: {props.usuario.biografia}</div>
        </div>
    )
}
