function assessEqual(recieved, expected) {
  // Does not work for arrays and hashes
  if (recieved === expected) {
    return 'test has passed'
  }
  return 'test has failed'
}

var notebook = new Notebook()

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
  assessEqual(notebook.list(), "Hi")

    )

    
