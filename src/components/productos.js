import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API_PRO, URL_IMAGENES_PRO } from "../config/rutas";


export default function Productos(){
    const [dataProductos, setDataProductos]=useState([])

    useEffect(()=>{
        //la que nos entrega la api
       // axios.get("https://zero4nfa-password2.onrender.com/producto/producto/api/mostrarProducto")
     axios.get(URL_API_PRO+"mostrarProducto")
        .then((respuesta)=>{
            // console.log(respuesta);
            setDataProductos(respuesta.data);
            
        })
        .catch((err)=>{
            console.log("error al recuperar producto"+err);
        });
    });


    useEffect(()=>{

    },[]);

    const listaProductos=dataProductos.map((producto)=>{
        // var foto="https://zero4nfa-password2.onrender.com/images/"+producto.foto;
        var foto=URL_IMAGENES_PRO+producto.foto;
        
        var editar="/editarProducto/"+ producto.id;
        var borrar="/borrarProducto/"+ producto.id;
        return(
                <tr className="aling-middle">
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td><img src={foto} width="100px" alt="foto de producto"/></td>
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
                <th>Descripcion</th>
                <th>foto</th>
                <th>Eliminar | Editar</th>
            </tr>
            </thead>

            <tbody>
                {listaProductos}


            </tbody>
        </table>
    );
}