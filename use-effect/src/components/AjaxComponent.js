import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "jhordan@jhordan.com",
                "first_name": "Jhordan",
                "last_name": "Julcamoro"
            },
            {
                "id": 2,
                "email": "jhordan2@jhordan.com",
                "first_name": "Jhordan2",
                "last_name": "Julcamoro2"
            },
            {
                "id": 3,
                "email": "jhordan3@jhordan.com",
                "first_name": "Jhordan3",
                "last_name": "Julcamoro3"
            },
            {
                "id": 4,
                "email": "jhordan4@jhordan.com",
                "first_name": "Jhordan4",
                "last_name": "Julcamoro4"
            }
        ])
    }

    const getUsuariosAjaxParams = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                },
                error => {
                    console.log(error);
                }
            )
    }

    useEffect(() => {
        //cada vez que se carga el componente, se llena el array
        // getUsuariosEstaticos();

        //get peticion AJAX usuarios
        getUsuariosAjaxParams();


    }, []);

    //mediante una promesa   
    return (
        <div>
            <h1>Listado de usuarios via AJAX</h1>
            <ol className='usuarios'>
                {
                    usuarios.map(usuarios => {
                        return <li key={usuarios.id}>{usuarios.first_name} {usuarios.last_name}</li>
                    })
                }
            </ol>
        </div>
    )
}
