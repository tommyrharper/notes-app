

class Notebook {
  constructor() {
    this.notes = ["Hi", "hello", "Note number twoooo", "Water melon is the best framework"]
  }
  list(){
    return this.notes.map( ( note ) => { return note.slice(0, 20); } )
  }
  addNote(note){
    this.notes.push(note)
  }
}
