import template from "../templates/home.template.html?raw";

import { navigate } from "../router/navigate";

export default function Home(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML = template

    const notesBtn = container.querySelector<HTMLButtonElement>("#notesBtn")

    notesBtn?.addEventListener("click",()=>{
        console.log("Go to Notes");
        navigate("notes")
    })

    return container

}