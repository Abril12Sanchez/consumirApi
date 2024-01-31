import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([])

    useEffect(()=>{
        //la que nos entrega la api
        axios.get("https://zero4nfa-password2.onrender.com/api/mostrarUsuarios")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataUsuarios(respuesta.data);
            
        })
        .catch((err)=>{
            console.log("error al recuperar"+err);
        });
    });


    useEffect(()=>{

    },[]);

    const listaUsuarios=dataUsuarios.map((usuario)=>{
        var foto="https://zero4nfa-password2.onrender.com/images/"+usuario.foto;
        var editar="/editar/"+ usuario.id;
        var borrar="/borrar/"+ usuario.id;
        return(
                <tr className="aling-middle">
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.usuario}</td>
                    <td><img src={foto} width="100px" alt="foto de usuario"/></td>
                    <td>
                        <Link to={editar}>Editar</Link> / 
                        <Link to={borrar}>Borrar</Link>
                    </td>
                </tr>
        );
    });


    return(
        <table className="table table-hover table-danger">
            <thead>
            <tr>
                <th>id</th>
                <th>nombre</th>
                <th>usuario</th>
                <th>foto</th>
            </tr>
            </thead>

            <tbody>
                {listaUsuarios}


            </tbody>
        </table>
    );
}