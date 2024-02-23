import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Error } from "./Error";
import { Menu } from "./Menu";
import Productos from "./productos";
import Usuarios from "./inicio";
import { Nuevo } from "./Nuevo";
import { EditarUsuario } from "./EditarUsu";
import { BorrarUsuario } from "./Borrar";
import { NuevoP } from "./productos/NuevoP";
import { EditarProducto } from "./productos/EditarP";
import { BorrarProducto } from "./productos/borrarP";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
        <Routes>
            
            <Route path="*" element={<Error/>}></Route>
            
            <Route path="/" element={<Usuarios/>}></Route>
            <Route path="/nuevo" element={<Nuevo/>}></Route>
            <Route path="/editarUsuario/:id" element={<EditarUsuario/>}></Route>
            <Route path="/BorrarUsuario/:id" element={<BorrarUsuario/>}></Route>

            <Route path="/productos" element={<Productos/>}></Route>
            <Route path="/nuevoPro" element={<NuevoP/>}></Route>
            <Route path="/editarProducto/:id" element={<EditarProducto/>}></Route>
            <Route path="/BorrarProducto/:id" element={<BorrarProducto/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}