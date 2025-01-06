// Selección de elementos del DOM
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");
const addNoteBtn = document.getElementById("add-note");

// Array para almacenar notas
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Función para renderizar las notas
function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.classList.add("note");

        li.innerHTML = `
            <span class="note-text">${note.text}</span>
            <div class="note-buttons">
                <button class="edit" onclick="editNote(${index})">Editar</button>
                <button class="delete" onclick="deleteNote(${index})">Eliminar</button>
            </div>
        `;
        notesList.appendChild(li);
    });
}

// Función para agregar una nota
addNoteBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        alert("Por favor, escribe una nota.");
        return;
    }
    const newNote = { text: noteText };
    notes.push(newNote);
    noteInput.value = "";
    saveNotes();
    renderNotes();
});

// Función para editar una nota
function editNote(index) {
    const newText = prompt("Editar Nota:", notes[index].text);
    if (newText !== null && newText.trim() !== "") {
        notes[index].text = newText.trim();
        saveNotes();
        renderNotes();
    }
}

// Función para eliminar una nota
function deleteNote(index) {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    }
}

// Función para guardar las notas en localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Renderizado inicial
renderNotes();
