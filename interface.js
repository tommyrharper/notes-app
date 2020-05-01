//user has entered content in textarea
//send new note to note list on click submit
/*
document.getElementById("submit-note").addEventListener("click", function() {
  document.getElementById("submit-note").innerHTML
})
*/
let notebook = new Notebook();
document.getElementById("individual-note-view").style.display = "none";
populateNoteList();
window.addEventListener("hashchange", showEntireNote);

function addNote(event) {
  event.preventDefault();
  const element = document.getElementById("add-note");
  notebook.addNote(element.value);
  const sendData = element.value
  element.value = "";
  populateNoteList();

  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:1234/kenny', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(sendData);
}

function populateNoteList() {
  let notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";
  notebook.list().forEach( ( note ) => {
    notesList.innerHTML += `<a href='#${note}' id='${note}'>${note}<br></a>`;
  });
}

function showEntireNote() {
  let noteAddress = findNoteAddress();
  let index = findIndexOfNoteClicked(noteAddress);
  displayNoteView(index);
  hideNotesListView();
}

function onClickBack() {
  document.getElementById("individual-note-view").style.display = "none";
  document.getElementById("notes-list-view").style.display = "block";
}

function findNoteAddress() {
  let locationHash = window.location.hash;
  return noteAddress = locationHash.split('#')[1];
}

function findIndexOfNoteClicked(noteAddress) {
  let parent = document.getElementById("notes-list");
  let id = noteAddress.replace(/%20/g, " ")
  let child = document.getElementById(id);
  return Array.prototype.indexOf.call(parent.children, child);
}

function displayNoteView(index) {
  let element = document.getElementById("note-content");
  element.innerHTML = notebook.displayNote(index);
  document.getElementById("individual-note-view").style.display = "block";
}

function hideNotesListView() {
  document.getElementById("notes-list-view").style.display = "none";
}