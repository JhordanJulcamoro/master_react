// Importar modulos de react / dependencias
import React, { Fragment } from "react";

// funcion del componente
const MiComponente = () => {

    let nombre = "Jhordan";
    let web = "http://julhua.com";

    let usuario = {
        nombre: nombre,
        apellidos: "Julcamoro",
        web: web
    }

    // console.log(usuario)

    return (
        <div className="mi-componente">
            <h2> Creando componente</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong> {nombre}</strong></li>
                <li>Web:  <strong> {web}</strong></li>
            </ul>
            <h3>Datos del usuario - JSON:</h3>
            <ul>
                <li>Nombre: <strong> {usuario.nombre}</strong></li>
                <li>Apellidos: <strong> {usuario.apellidos}</strong></li>
                <li>Web:  <strong> {usuario.web}</strong></li>
            </ul>
            <p> este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
}

// exportar componente
export default MiComponente;