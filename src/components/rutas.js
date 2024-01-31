import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Error } from "./Error";
import { Inicio } from "./inicio";
import { Menu } from "./Menu";

export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}