import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos(){
    const [dataProductos, setDataProductos]=useState([])

    useEffect(()=>{
        //la que nos entrega la api
        axios.get("https://zero4nfa-password2.onrender.com/producto/producto/api/mostrarProducto")
       // axios.get("http://localhost:3000/producto/producto/api/mostrarProducto")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataProductos(respuesta.data);
            
        })
        .catch((err)=>{
            console.log("error al recuperar producto"+err);
        });
    });


    useEffect(()=>{

    },[]);

    const listaProductos=dataProductos.map((producto)=>{
        var foto="https://zero4nfa-password2.onrender.com/images/"+producto.foto;
        var editar="/editar/"+ producto.id;
        var borrar="/borrar/"+ producto.id;
        return(
                <tr className="aling-middle">
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.usuario}</td>
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
                {listaProductos}


            </tbody>
        </table>
    );
}