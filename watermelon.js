function assessEqual(recieved, expected) {
  // Does not work for arrays and hashes
  if (recieved === expected) {
    return 'test has passed'
  }
  return 'test has failed'
}

var notebook = new Notebook()
var list = notebook.list()
document.write(
  'test1 - 4 is equal to 4: ',
  assessEqual(4,4),
  '<br>',
  '<br>',
  'test2 - 4 is not equal to 3: ',
  assessEqual(4,3),
  '<br>',
  '<br>',
  'note lists hi: ',
  assessEqual(list[0], "Hi"),
  '<br>',
  '<br>',
  'note lists hello: ',
  assessEqual(list[1], "hello"),
  '<br>',
  '<br>',
  'test3 - shows 3rd item in list: ',
  assessEqual(list[2], "Note number twoooo"),
  '<br>',
  '<br>',
  'reduces Water melon is the best framework characters down to 20 chars: ',
  assessEqual(list[3], "Water melon is the b"),
  '<br>',
  '<br>',
  'adds a new note - new note:',
  notebook.addNote("new note"),
  assessEqual(notebook.list()[4], "new note"),
    )



    