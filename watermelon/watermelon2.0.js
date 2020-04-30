// toEqual and to expe
function expect(testCase) {
	var toEqual = function(comparison) {
		if (testCase === comparison) {
			printToHTML("Pass", "green")
		} else {
			printToHTML("Fail", "red")
		}
	}
	return {
		toEqual: toEqual
	};
}

function it(name, test) {
  printToHTML(name)
	test()
	printToHTML("<br>")
}

function printToHTML(text, colour) {
  var testContainer = document.getElementById("tests")
  testContainer.innerHTML +=  `<div style="color:${colour}">${text}</div>` 
}