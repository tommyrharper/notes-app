var notebook = new Notebook()
var list = notebook.list()

// #list

 //#addNote - 
 it("adds a new note" , function(){
  notebook.addNote("new note")
  expect(notebook.list()[0]).toEqual("new note")
})

 notebook = new Notebook()
it("displays note" , function(){
  notebook.addNote("really reaaallllly long note")
  expect(notebook.displayNote(0)).toEqual("really reaaallllly long note")
})

it("truncates notes to 20 lines" , function(){
  notebook.addNote("really reaaallllly long note")
  expect(notebook.list()[0]).toEqual("really reaaallllly l")
})


