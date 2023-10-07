import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const EjercicIoComponent = ({year}) => {

    const [yearNow,setYearNow] = useState(year);

    const aumentarAnho = (e) =>{
        setYearNow (yearNow+1);
    }
    const disminuirAnho = (e) => { 
        setYearNow (yearNow-1);
    }

    // const cambiarAnho = (e, newAnho) => {
    //     setYearNow (newAnho);
    // }

    const cambiarAnho = (e) => {
        let dato = e.target.value;
        setYearNow (dato);
    }

  return (
    <div>
        <h1>Desarrollo de Ejercicio</h1>
        <strong> Anho:: {yearNow}</strong>
        &nbsp;
        < button onClick={aumentarAnho} >Aumentar anhos</button>
        &nbsp;
        < button onClick={disminuirAnho} >Disminuir anhos</button>
        &nbsp;
        <p> Cambiar anho:
            <input 
            type='text' 
            // onChange={e => cambiarAnho(e,e.target.value)} 
            onChange={cambiarAnho}
            placeholder="Cambiar anho"/>
        </p>
    </div>
  )
}

EjercicIoComponent.propTypes ={
    year: PropTypes.number.isRequired,
}
