import { traerDatos } from "./data.js"

traerDatos()

/*Botón cerrar sesión */

document.getElementById("cerrarSesion").addEventListener("click", () => {
    window.location.href = "./index.html";
});