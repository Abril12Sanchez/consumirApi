import React from "react";
import  ReactDom  from "react-dom/client";
import ".//styles.css";
import { Rutas } from "./components/rutas";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>

   <Rutas/>
    </>

)