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
	var image;
	var colour;

	if (result === "Pass") {
		image = "slice-watermelon.png"
		colour = 'green'
	} else {
		image = "broken-watermelon.png"
		colour = 'red'
	}

	var imageElement = createImageElement(image)
	var textNode = document.createTextNode(result)
	var resultDiv = createResultDiv(imageElement, textNode, colour)

	var testDiv = document.getElementById("tests")
	testDiv.appendChild(resultDiv)
}

function printLabel(label) {
	var testDiv = document.getElementById("tests")
	testDiv.innerHTML +=  `<div>${label}</div>` 
}

function createImageElement(image) {
	var imageElement = document.createElement('img')
	imageElement.src = image
	imageElement.width = "30"
	return imageElement
}

function createResultDiv(imageElement, textNode, colour) {
	var resultDiv = document.createElement('div')
	resultDiv.style.color = colour
	resultDiv.appendChild(imageElement)
	resultDiv.appendChild(textNode)
	resultDiv.style.display = 'flex'
	resultDiv.style.alignItems = 'center'

	return resultDiv
}