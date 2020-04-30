// toEqual and to expe
function expect(testCase) {
	var toEqual = function(comparison) {
		if (testCase === comparison) {
			console.log("Pass")
		} else {
			console.log("Fail")
		}
	}
	return {
		toEqual: toEqual
	};
}

function it(name, test) {
  console.log(name)
  test()
}
