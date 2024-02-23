import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NuevoP() {
    const [nombre, setNombre]=useState("");  
    const[precio,setPrecio]=useState("");
    const [cantidad, setCantidad]=useState("");
    const [descripcion, setDescripcion]=useState("");
    const [foto, setFoto]=useState(null);
    const [mensaje, setMensaje]=useState("")
    const navigate=useNavigate();

    async function guardarDatos(e){
        e.preventDefault(); 
        // console.log(nombre);
        //setNombre(e.target.nombre.value);
       const formData=new FormData();
       formData.append("nombre", nombre);
       formData.append("precio", precio);
       formData.append("cantidad", cantidad);
       formData.append("descripcion", descripcion);
       formData.append("foto", foto);
       const res=await axios.post("http://localhost:3000/producto/api/nuevoProducto",formData,{
       headers:{
        "Content-Type":"multipart/form-data"
       }
    });
    // console.log(res);
    setNombre("");
    setPrecio("");
    setCantidad("");
    setDescripcion("");
    setFoto(null);
    setMensaje(res.data);
    setTimeout(()=>{
        setMensaje("");
        navigate("/productos");
    },3000);

    }

  return (
    <div className="container mt-5">
        <div><h3>{mensaje}</h3></div>
      <form onSubmit={guardarDatos}>
        <div className="card">
          <div className="card-header">
            <h1>Nuevo Producto</h1>
          </div>
          <div className="card-body">
            <input type="text" name="nombre" id="nombre" value={nombre} className="form-control mb-3" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)} autoFocus/>
            <input type="number" name="precio" id="precio" value={precio}  placeholder="Precio" className="form-control mb-3" onChange={(e)=>setPrecio(e.target.value)} />
            <input type="number" name="cantidad" id="cantidad" value={cantidad}  placeholder="Cantidad" className="form-control mb-3" onChange={(e)=>setCantidad(e.target.value)}/>
            <input type="text" name="descripcion" id="descripcion" value={descripcion}  placeholder="Descripcion" className="form-control mb-3" onChange={(e)=>setDescripcion(e.target.value)}/>
            <input type="file" name="foto" id="foto" placeholder="Foto" className="form-control mb-3" onChange={(e)=>setFoto(e.target.files[0])} />
          </div>
          <div className="card-footer"> 
            <button type="submit" className="form-control btn btn-primary" >Guardar Producto🧃✅</button>
          </div>
        </div>
      </form>
    </div>
  );
}
