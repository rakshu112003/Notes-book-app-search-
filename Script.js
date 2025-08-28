
javascript
function addNote() {
  let noteText = document.getElementById("noteText").value;
  if (noteText.trim() === "") return;
  
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  
  document.getElementById("noteText").value = "";
  displayNotes();
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      note
      <button class="delete-btn" onclick="deleteNote({index})">X</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function searchNotes() {
  let query = document.getElementById("searchText").value.toLowerCase();
[8/28, 12:40 PM] ChatGPT: let notes = document.getElementsByClassName("note");

  Array.from(notes).forEach(note => {
    let text = note.innerText.toLowerCase();
    note.style.display = text.includes(query) ? "block" : "none";
  });
}

// Initialize
displayNotes();



