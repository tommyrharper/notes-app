//user has entered content in textarea
//send new note to note list on click submit
/*
document.getElementById("submit-note").addEventListener("click", function() {
  document.getElementById("submit-note").innerHTML
})
*/
let notebook = new Notebook();
populateNoteList();

function addNote(event) {
  event.preventDefault();
  const element = document.getElementById("add-note");
  notebook.addNote(element.value);
  element.value = "";
  populateNoteList();
}

function populateNoteList() {
  let notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";
  notebook.list().forEach( ( note ) => {
    notesList.innerHTML += note + "<br>";
  });
}