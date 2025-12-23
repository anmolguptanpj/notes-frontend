import { routes } from "./routes";

export function router(){

    const app = document.getElementById("app");
    if(!app) return;


    const path = location.pathname || "/";
    const page = routes[path]

    app.innerHTML="";
    app.appendChild(page ? page() : document.createTextNode("404"))
}