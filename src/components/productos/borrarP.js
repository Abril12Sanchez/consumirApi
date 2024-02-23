import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API_PRO, URL_IMAGENES_PRO } from "../../config/rutas";

export function BorrarProducto(){
    const params = useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        async function borrar(){
            // const res=axios.get(URL_API_PRO+"borrarProducto/"+params.id);
            // /api/borrarProducto/:id
            // "http://localhost:3000/producto/api/editarProducto"
            // const res=axios.get("http://localhost:3000/producto/api/borrarProducto/"+params.id);
            const res=axios.get("https://zero4nfa-password2-1.onrender.com/producto/api/borrarProducto/"+params.id);
            console.log(res);
            navigate("/productos");
        }
        borrar();
    },[params.id]);

    return(
        <h1>Borrar Producto</h1>

    )
}