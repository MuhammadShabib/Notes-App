const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
const notes = document.querySelector(".input-box")

function sowNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
sowNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let span = document.createElement("span")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true")
    span.setAttribute("contenteditable", "false")
    span.className = "delete"
    span.innerText = "Delete"

    notesContainer.appendChild(inputBox).appendChild(span)
})
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        });
    }
})
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})