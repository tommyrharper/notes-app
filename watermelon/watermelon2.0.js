// toEqual and to expe
function expect(testCase) {
	var toEqual = function(comparison) {
		if (testCase === comparison) {
			printResult("Pass", "green")
		} else {
			printResult("Fail", "red")
		}
	}
	return {
		toEqual: toEqual
	};
}

function it(name, test) {
  printLabel(name)
	test()
}

function printResult(result, colour) {
	var testContainer = document.getElementById("tests")
	var image;
	if (result === "Pass") {
		image = "slice-watermelon.png"
	} else {
		image = "broken-watermelon.png"
	}
	testContainer.innerHTML +=  `<div style="color:${colour};line-height:10px"><img src="${image}" style="width:30px"/>${result}</div>` 
}

function printLabel(label) {
	var testContainer = document.getElementById("tests")
	testContainer.innerHTML +=  `<div>${label}</div>` 
}