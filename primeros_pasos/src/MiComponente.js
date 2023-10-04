// Importar modulos de react / dependencias
import React, { Fragment } from "react";

// funcion del componente
const MiComponente = () => {
    return (
        <Fragment>
            <hr />
            <h2> Creando componente</h2>
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
        </Fragment>
    );
}

// exportar componente
export default MiComponente;