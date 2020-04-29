//user has entered content in textarea
//send new note to note list on click submit
/*
document.getElementById("submit-note").addEventListener("click", function() {
  document.getElementById("submit-note").innerHTML
})
*/
let notebook = new Notebook();
populateNoteList();

window.addEventListener("hashchange", showEntireNote);

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
    notesList.innerHTML += `<a href='#${note}' id='${note}'>${note}<br></a>`;
  });
}

function showEntireNote() {
  let locationHash = window.location.hash;
  let noteAddress = locationHash.split('#')[1];
  let parent = document.getElementById("notes-list");
  let id = noteAddress.replace(/%20/g, " ")
  let child = document.getElementById(id);
  let index = Array.prototype.indexOf.call(parent.children, child);
  let element = document.getElementById("individual-note");
  element.innerHTML = notebook.displayNote(index);
}