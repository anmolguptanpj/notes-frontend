import template from "../templates/notes.template.html?raw"

export default function Notes(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML = template

    const noteForm = container.querySelector("#notes")

    const storageKey:string = "notesappbyanm"

    

    noteForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const formData = {
            id: crypto.randomUUID(),
            title:container.querySelector("#title").value,
            text:container.querySelector("#text").value,
            createdAt:new Date().toISOString()
        }

        const existingNotes = JSON.parse(localStorage.getItem(storageKey)) || []


       
        existingNotes.push(formData)

        localStorage.setItem(storageKey,JSON.stringify(existingNotes))
        container.querySelector('#title').value=""
        container.querySelector('#text').value=""
        renderNotes()


    });

    function renderNotes(){
        const content = container.querySelector("#content")
        content.innerHTML=""
        
        const raw = localStorage.getItem(storageKey)
        const notes = raw ? JSON.parse(raw) : []
        
       
        notes.forEach(note=>{
            const texts = document.createElement("article");
            texts.innerHTML=`
           <div class=" r p-5 border-2 border-gray-400 rounded-xl shadow-xl m-2"> <h3 class="text-xl font-bold underline">${note.title}</h3>
            <p>${note.text}</p>
            <small>${new Date(note.createdAt).toLocaleString()}</small></div>`;
            content.appendChild(texts)

            
             texts.addEventListener("click",()=>{alert("You clicked on notes")})

        })

       
    }



    renderNotes()
    console.log(localStorage)








    return container
    
}