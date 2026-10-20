

let add_butoon = document.getElementById("add-note-button")
let note_list = document.getElementById("note-list")
let note_input = document.getElementById("note-input")
let empty_state = document.getElementById("empty-state")
let note_count = document.getElementById("count")

let savedNotes = localStorage.getItem("quickNotes");
let notes = savedNotes ? JSON.parse(savedNotes) : [];
let string_notes = "";
console.log(notes)



for (let i = 0; i < notes.length; i++) {
    
    let li = document.createElement("li")
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.innerText = "Delete";
    
    btn.classList.toggle("delete-button")
    li.classList.toggle("note")
    p.innerText = notes[i];
    note_list.append(li)
    li.append(p)
    li.append(btn)
    note_count.textContent = note_list.children.length;
    
   

    // li.innerText = current_note
    
    btn.addEventListener("click", () => {
       let index = Array.from(note_list.children).indexOf(li);
        
        if (index !== -1) {
            notes.splice(index, 1);
            
        }
        li.remove();
        
        
        //    update local storage
        string_notes = JSON.stringify(notes);
         localStorage.setItem("quickNotes", string_notes);
        
        
        note_count.textContent = note_list.children.length;
        empty_state.style.display = note_list.children.length === 0 ? "" : "none";
        
        
    });
    
}

empty_state.style.display =
    note_list.children.length === 0 ? "" : "none";

add_butoon.addEventListener("click", () => {
    console.log("Button clicked")

    let user_type = note_input.value.trim()
    if(user_type === ""){
        return
    }
    empty_state.style.display = "none";
     
    let li = document.createElement("li")
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.innerText = "Delete";
    
    btn.classList.toggle("delete-button")
    li.classList.toggle("note")
    p.innerText = user_type;
    note_list.append(li)
    li.append(p)
    li.append(btn)


    note_count.textContent = note_list.children.length;

    // local storage
    notes.push(user_type)
    string_notes = JSON.stringify(notes);
    localStorage.setItem("quickNotes", string_notes);

    btn.addEventListener("click", () => {  
        let index = Array.from(note_list.children).indexOf(li);
        li.remove();

        note_count.textContent = note_list.children.length;
        empty_state.style.display = note_list.children.length === 0 ? "" : "none";

        // delt from array
        // let index = notes.indexOf(user_type);
      
        if (index !== -1) {
            notes.splice(index, 1);
        }   
        


    //    update local storage
        string_notes = JSON.stringify(notes);
        localStorage.setItem("quickNotes", string_notes);


    });
    console.log(note_count.textContent)
    note_input.value = "";
});
