

// toEqual and to expe
function expect(testcase) {
	var toEqual = function(comparison) {
		if (testcase === comparison) {
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
var notebook = new Notebook()
var list = notebook.list()
// test 1 
it('note lists hi', function(){
  expect(list[0]).toEqual('Hi')
})

//test 2

it('shows 3rd item in list', function(){
  expect(list[2]).toEqual("Note number twoooo")
})
