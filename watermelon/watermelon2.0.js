// toEqual and to expe
function expect(testCase) {
	var toEqual = function(comparison) {
		if (testCase === comparison) {
			testResult("Pass")
		} else {
			testResult("Fail")
		}
	}
	return {
		toEqual: toEqual
	};
}

function it(name, test) {
  testResult(name)
  test()
}




function testResult(result) {
  var testContainer = document.getElementById("tests")
  testContainer.innerHTML +=  result 
}