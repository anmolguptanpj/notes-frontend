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
    todo.innerHTML = ""; 
   
    todos.forEach((item)=>{
         const div = document.createElement("div")
         div.innerHTML=item
         todo.appendChild(div)
         console.log(todos)
         div.className="px-3 rounded-xl py-2 border-2 border-transparent shadow-xl"
    })

    
 }

    const input = container.querySelector<HTMLInputElement>("#input")
    const button = container.querySelector<HTMLButtonElement>("#save")
    
    button.addEventListener("click",()=>{
        saveTodos(input.value)
        renderTodos()
        input.value=""
    })
   




    return container
    
}