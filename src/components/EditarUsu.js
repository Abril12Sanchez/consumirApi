import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API, URL_IMAGES } from "../config/rutas";


export function EditarUsuario() {
  console.log("siuuuu1 de editar");
  const params = useParams();
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [foto, setFoto] = useState();
  const [rutaFoto, setRutaFoto] = useState("");
  const [passwordViejo, setPasswordViejo] = useState("");
  const [saltViejo, setSaltViejo] = useState("");
  const [admin, setAdmin] = useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    async function buscarPorId() {
      var res = await axios.get(URL_API+"buscarUsuarioPorId/" + params.id);
      // console.log(res);

      setId(res.data.id);
      setNombre(res.data.nombre);
      setUsuario(res.data.usuario);
      setPasswordViejo(res.data.password);
      setSaltViejo(res.data.salt);
      setAdmin(res.data.admin);
      // setFoto(res.data.foto);
      setRutaFoto(URL_IMAGES + res.data.foto);
    }
    buscarPorId();
  }, [params.id]);

  async function guardarDatos(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("usuario", usuario);
    formData.append("password", password);
    formData.append("foto", foto);
    formData.append("passwordViejo", passwordViejo);
    formData.append("saltViejo", saltViejo);
    formData.append("admin", admin);

    const res = await axios.post(URL_API+"editarUsuario",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // console.log(res);
    setNombre("");
    setUsuario("");
    setPassword("");
    setFoto(null);
    setMensaje(res.data);
    setAdmin(true);

    setTimeout(() => {
      setMensaje("");
      navigate("/")
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
            <h1>Editar Usuario</h1>
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
              name="passwordViejo"
              id="passwordViejo"
              value={passwordViejo}
              readOnly
            />
            <input
              type="text"
              name="saltViejo"
              id="saltViejo"
              value={saltViejo}
              readOnly
            />
            <input
              type="text"
              name="admin"
              id="admin"
              value={admin}
              readOnly
            />

            <input
              type="text"
              name="nombre"
              id="nombre"
              value={nombre}
              className="form-control mb-3"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              name="usuario"
              id="usuario"
              value={usuario}
              placeholder="Usuario"
              className="form-control mb-3"
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
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
              Realizar cambios
            </button>
          </div>
        </div>
       
      </form>
    </div>
  );
}
