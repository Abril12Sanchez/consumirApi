import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Nuevo() {
    const [nombre, setNombre]=useState("");  
    const[usuario,setUsuario]=useState("");
    const [password, setPassword]=useState("");
    const [foto, setFoto]=useState(null);
    const [mensaje, setMensaje]=useState("");
    const navigate=useNavigate();

    async function guardarDatos(e){
        e.preventDefault(); 
        // console.log(nombre);
        //setNombre(e.target.nombre.value);
       const formData=new FormData();
       formData.append("nombre", nombre);
       formData.append("usuario", usuario);
       formData.append("password", password);
       formData.append("foto", foto);
       const res=await axios.post("http://localhost:3000/api/nuevousuario",formData,{
       headers:{
        "Content-Type":"multipart/form-data"
       }
    });
    console.log(res);
    setNombre("");
    setUsuario("");
    setPassword("");
    setFoto(null);
    setMensaje(res.data);
    setTimeout(()=>{
        setMensaje("")
        navigate("/")
    },3000);

    }

  return (
    <div className="container mt-5">
        <div><h3>{mensaje}</h3></div>
      <form onSubmit={guardarDatos}>
        <div className="card">
          <div className="card-header">
            <h1>Nuevo Usuario</h1>
          </div>
          <div className="card-body">
            <input type="text" name="nombre" id="nombre" value={nombre} className="form-control mb-3" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
            <input type="text" name="usuario" id="usuario" value={usuario}  placeholder="Usuario" className="form-control mb-3" onChange={(e)=>setUsuario(e.target.value)} />
            <input type="text" name="password" id="password" value={password}  placeholder="Password" className="form-control mb-3" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="file" name="foto" id="foto" placeholder="Foto" className="form-control mb-3" onChange={(e)=>setFoto(e.target.files[0])} />
          </div>
          <div className="card-footer"> 
            <button type="submit" className="form-control btn btn-primary" >✅</button>
          </div>
        </div>
      </form>
    </div>
  );
}
