import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";

export default function Usuarios(){
    const [dataUsuarios, setDataUsuarios]=useState([])

    useEffect(()=>{
        //la que nos entrega la api
      //  axios.get("https://zero4nfa-password2.onrender.com/api/mostrarUsuarios")
        axios.get(URL_API+"mostrarUsuarios")
        .then((respuesta)=>{
            // console.log(respuesta);
            setDataUsuarios(respuesta.data);
            
        })
        .catch((err)=>{
            console.log("error al recuperar"+err);
        });
    });


    useEffect(()=>{

    },[]);

    const listaUsuarios=dataUsuarios.map((usuario)=>{
        // var foto="https://zero4nfa-password2.onrender.com/images/"+usuario.foto;
        var foto=URL_IMAGES+usuario.foto;
        var editar="/editarUsuario/"+ usuario.id;
        var borrar="/borrarUsuario/"+ usuario.id;
        return(
                <tr className="aling-middle">
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.usuario}</td>
                    <td><img src={foto} width="100px" alt="foto de usuario"/></td>
                    <td>
                        {/* <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link> /  */}
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
                <th>Usuario</th>
                <th>foto</th>
                <th>Eliminar | Editar</th>
            </tr>
            </thead>

            <tbody>
                {listaUsuarios}


            </tbody>
        </table>
    );
}