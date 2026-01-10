import template from "../templates/notes.template.html?raw"

export default function Notes(): HTMLElement{
    const container = document.createElement("div");

    container.innerHTML = template

    const noteForm = container.querySelector("#notes")

    const storageKey:string = "notesappbyanm"

     const raw = localStorage.getItem(storageKey)
        let notes = JSON.parse(raw) 


    

   




    function renderNotes(){
        const content = container.querySelector("#content")
        content.innerHTML=""
        
       
        const deletenotes= (noteId)=>{
            notes = notes.filter(note=>note.id !== noteId)
            localStorage.setItem(storageKey,JSON.stringify(notes))
            renderNotes()
        }
       
        notes.forEach(note=>{
            const texts = document.createElement("article");
            texts.innerHTML=`
            <div class="  p-5 border-2 flex flex-col items-center border-gray-400 rounded-xl shadow-xl m-2">
           <div class="mb-5">
            <h3 class="text-xl font-bold underline">${note.title}</h3>
            <p>${note.text}</p>
             <small>${new Date(note.createdAt).toLocaleString()}</small>
           </div>
           
            <button class=" hover:underline hover:bg-gray-200 rounded border-4 w-20 border-gray-600" id="delete">Delete</button>
            </div>
            `;
            texts.querySelector("#delete")?.addEventListener("click",(e)=>{deletenotes(note.id);
                e.stopPropagation()
            })

            content.appendChild(texts)

            
            texts.addEventListener("click",(()=>{editOrprev(note)}))


        })







       
    }



        function editOrprev(note){
    const formEdit = document.createElement("div")
    formEdit.innerHTML=`<div id="editDiv" class=" fixed h-full w-full inset-0 z-50 bg-black/40  flex justify-center items-center"><form  id="formDiv" class="flex  bg-white flex-row  h-45  w-200 border-gray-400   border-2 rounded-xl shadow-2xl m-20">
           <div  class="my-3  mx-3 flex flex-col gap-6 w-full p-2">
            <input id="editTitle" class="text-2xl font-bold w-full  focus:outline-none" placeholder="Title"/>
            <input  id="editText" class="text-xl w-full  focus:outline-none" required placeholder="Take a note"/>
            <div class="w-full flex justify-end ">
                <button class="w-20  text-center font-bold hover:bg-gray-100  " type="submit">Add</button>
            </div>
           </div>
        </form> </div>`

        formEdit.querySelector("#editText").value=note.text
        formEdit.querySelector("#editTitle").value=note.title
        formEdit.querySelector("#formDiv").addEventListener("submit",(e)=>{
            e.preventDefault();
            const editNote = notes.find(n => n.id=== note.id)
            console.log(editNote)
            if(!editNote) return
            editNote.title = formEdit.querySelector(`#editTitle`).value
            editNote.text = formEdit.querySelector("#editText").value
            localStorage.setItem("notesappbyanm",JSON.stringify(notes))
            formEdit.remove()
             renderNotes()
            
           
        })
        formEdit.querySelector("#editDiv").addEventListener("click",()=>{formEdit.remove()})
        formEdit.querySelector("#formDiv").addEventListener("click",(e)=>{e.stopPropagation()})
    const main = container.querySelector("main")
    main.append(formEdit)
    
    }



     noteForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const formData = {
            id: crypto.randomUUID(),
            title:container.querySelector("#title").value,
            text:container.querySelector("#text").value,
            createdAt:new Date().toISOString()
        }

        const existingNotes = notes


       
        existingNotes.push(formData)

        localStorage.setItem(storageKey,JSON.stringify(existingNotes))
        container.querySelector('#title').value=""
        container.querySelector('#text').value=""
        
        renderNotes()


    });



    renderNotes()
    console.log(localStorage)








    return container
    
}