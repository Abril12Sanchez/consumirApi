import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Error } from "./Error";
import { Menu } from "./Menu";
import Productos from "./productos";
import Usuarios from "./inicio";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
        <Routes>
            <Route path="/productos" element={<Productos/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/" element={<Usuarios/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}