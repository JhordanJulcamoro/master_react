// Importar modulos de react / dependencias
import React, { Fragment } from "react";

// funcion del componente
const MiComponente = () => {

    let nombre = "Jhordan Julcamoro";
    let web = "http://julhua.com";

    return (
        <div className="mi-componente">
            <hr />
            <h2> Creando componente</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong> {nombre}</strong></li>
                <li>Web:  <strong> {web}</strong></li>
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