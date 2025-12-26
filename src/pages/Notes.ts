import template from "../templates/notes.template.html?raw"

export default function Notes(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML = template

    let todos=[];

    function saveTodos(value : string){
        todos.push(value)
    }

 function renderTodos(){
    const todo = container.querySelector("#content")
   
    todos.forEach((item)=>{
         const div = document.createElement("div")
         div.innerHTML=item
         todo.appendChild(div)

    })

    
 }

    const input = container.querySelector<HTMLInputElement>("#input")
    input?.addEventListener("input",(e)=>{
        const value = (e.target as HTMLInputElement).value;
        console.log(value)
       if(!value)return;
       saveTodos(value)
       renderTodos()

    })



    return container
    
}