document.getElementById("individual-note-view").style.display = "none";
populateNoteList();
window.addEventListener("hashchange", showEntireNote);
// gets the list from the server
getRequest()

function getRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:1234/notes', true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var resp = this.response;
      var notes = JSON.parse(resp)
      populateTestList(notes)
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    // There was a connection error of some sort
  };
  request.send();
}

function populateTestList(notes) {
  let testList = document.getElementById("testing");
  testList.innerHTML = ""
  notes.shortList.forEach((note) => {
  testList.innerHTML += `<a href='#${note}' id='${note}'>${note}<br></a>`;
  })
}

function postRequest(sendData) {
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:1234/notes', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(sendData);

}

function addNote(event) {
  event.preventDefault();
  const element = document.getElementById("add-note");
  // notebook.addNote(element.value);
  const sendData = element.value
  element.value = "";
  // populateNoteList();

  postRequest(sendData)
  getRequest()

}

function populateNoteList() {
  let notesList = document.getElementById("notes-list");
  notesList.innerHTML = "";
  // notebook.list().forEach( ( note ) => {
  //   notesList.innerHTML += `<a href='#${note}' id='${note}'>${note}<br></a>`;
  // });
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