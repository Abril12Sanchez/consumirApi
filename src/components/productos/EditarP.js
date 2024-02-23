import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API_PRO, URL_IMAGENES_PRO } from "../../config/rutas";


export function EditarProducto() {
  console.log("editando productos");
  const params = useParams();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [foto, setFoto] = useState();
  const [rutaFoto, setRutaFoto] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    async function buscarPorId() {
      // var res = await axios.get("http://localhost:3000/producto/api/buscarProductoPorId/" + params.id);
      var res = await axios.get(URL_API_PRO+"buscarProductoPorId/" + params.id);
      // /producto/api/buscarProductoPorId/:id
      // export const URL_API_PRO="http://localhost:3000/producto/producto/api/";
      // console.log(res);

      setId(res.data.id);
      setNombre(res.data.nombre);
      setPrecio(res.data.precio);
      setCantidad(res.data.cantidad);
      setDescripcion(res.data.descripcion);
      // setFoto(res.data.foto);
      setRutaFoto(URL_IMAGENES_PRO + res.data.foto);
    }
    buscarPorId();
  }, [params.id]);

  async function guardarDatos(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("precio", precio);
    formData.append("cantidad", cantidad);
    formData.append("foto", foto);
    formData.append("descripcion", descripcion);

    // "http://localhost:3000/producto/api/editarProducto"
    // const res = await axios.post(URL_API_PRO+"editarProducto",
    const res = await axios.post("https://zero4nfa-password2-1.onrender.com/producto/api/editarProducto",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // console.log(res);
    setNombre("");
    setPrecio("");
    setCantidad("");
    setDescripcion("");
    setFoto(null);
    setMensaje(res.data);

    setTimeout(() => {
      setMensaje("");
      navigate("/productos")
    }, 3000);

    
  }

  // function editarDatos(e) {
  //   e.preventDefault();
  //   console.log("siuuuuu 2");
  //   var datos = {
  //     id,
  //     nombre,
  //     usuario,
  //     admin,
  //     password,
  //     foto
  //   };
  //   console.log(datos);
  // }


  return (
    <div className="container mt-5">
      <div>
        <h3>{mensaje}</h3>
      </div>
      <form onSubmit={guardarDatos} >
        <div className="card">
          <div className="card-header">
            <h1>Editar Productos</h1>
          </div>
           
          <div className="card-body">
            <input
              type="text"
              name="id"
              id="id"
              value={id}
              className="form-control mb-3"
              readOnly
            />
            
            

            <input
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              className="form-control mb-3"
              placeholder="nombre"
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              name="precio"
              id="precio"
              value={precio}
              placeholder="Precio"
              className="form-control mb-3"
              onChange={(e) => setPrecio(e.target.value)}
            />
            <input
              type="text"
              name="cantidad"
              id="cantidad"
              value={cantidad}
              placeholder="Cantidad"
              className="form-control mb-3"
              onChange={(e) => setCantidad(e.target.value)}
            />
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              value={descripcion}
              placeholder="Descripcion"
              className="form-control mb-3"
              onChange={(e) => setDescripcion(e.target.value)}
            />
  
{/* <input class="form-control mb-3" type="password"  name="password" id="password" 
placeholder="Escribe un nuevo Password o en blanco para conservarlo " autocomplete="current-password"/> */}
           
            <div>
              <img src={rutaFoto} alt="fotode usuario" width="100px" />
            </div>

            <input
              type="file"
              name="foto"
              id="foto"
              placeholder="Foto"
              className="form-control mb-3"
              onChange={(e) => setFoto(e.target.files[0])}
            />
          </div>
          <div className="card-footer">
            <button type="submit" className="form-control btn btn-primary">
              Realizar cambios al Producto🧃✅
            </button>
          </div>
        </div>
       
      </form>
    </div>
  );
}
