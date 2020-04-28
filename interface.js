//user has entered content in textarea
//send new note to note list on click submit
/*
document.getElementById("submit-note").addEventListener("click", function() {
  document.getElementById("submit-note").innerHTML
})
*/
document.getElementById("add-note").addEventListener("click", function() {
  document.getElementById("submit-note").innerHTML = "Hello!";
});

function getData() {
  console.log("hello")
  return false;
}