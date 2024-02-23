import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API, URL_IMAGES } from "../config/rutas";

export function BorrarUsuario(){
    const params = useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        async function borrar(){
            const res=axios.get(URL_API+"borrarUsuario/"+params.id);
            console.log(res);
            navigate("/");
        }
        borrar();
    },[params.id]);

    return(
        <h1>Borrar Usuario</h1>

    )
}