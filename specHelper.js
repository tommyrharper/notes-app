function assessEqual(recieved, expected) {
  // Does not work for arrays and hashes
  if (recieved === expected) {
    return true
  }
  return false
}