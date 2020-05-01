

class Notebook {
  constructor() {
    this.notes = []
  }
  list(){
    return this.notes.map( ( note ) => { return note.slice(0, 20); } )
  }
  addNote(note){
    this.notes.push(note)
  }
  displayNote(index) {
    return this.notes[index]
  }
}

module.exports = Notebook