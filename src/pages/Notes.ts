import template from "../templates/notes.template.html?raw"

export default function Notes(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML =template

    return container
    
}