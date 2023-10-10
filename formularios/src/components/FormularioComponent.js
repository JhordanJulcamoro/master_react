import React from 'react'

export const FormularioComponent = () => {
    return (
        <div>
            <h1>Formularios con REACT</h1>
            <form>
               <input type="text" placeholder='Nombre: '/>
               <input type="text" placeholder="Apellido: "/>
                <select>
                    <option value="Hombre"> Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <textarea placeholder='Biografia'></textarea>
                <input type='submit' value="Enviar"/>
            </form>
        </div>
    )
}
