function assessEqual(recieved, expected) {
  // Does not work for arrays and hashes
  if (recieved === expected) {
    return true
  }
  return false
}


document.write(
  'test1 - 4 is equal to 4: ',
  assessEqual(4,4)
    )