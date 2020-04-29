it("and so is a spec", function() {
a = true;

    expect(a).toBe(true);

});

1. function caleld it

|     | IN  | OUT |
| --- | --- | --- |
|     |     |     |
|     |     |     |
|     |     |     |
|     |     |     |

+--------------------------------+----------------+
|             INPUT              |     OUTPUT     |
+--------------------------------+----------------+
| it('2+1 equals 3', function(){ | "2+1 equals 3" |
|    expect(2 + 1).toEqual(3)    | "Pass"         |
| })                             |                |
+--------------------------------+----------------+
| it('2+2 equals 3', function(){ | "2+2 equals 3" |
|    expect(2 + 2).toEqual(3)    | "Fail"         |
| })                             |                |
+--------------------------------+----------------+



+--------------------------------+----------------+
|             INPUT              |     OUTPUT     |
+--------------------------------+----------------+
| it('2+1 equals 3', function(){ | "2+1 equals 3" |
|                                |                |
| })                             |                |
+--------------------------------+----------------+
| it('2+2 equals 3', function(){ | "2+2 equals 3" |
|                                |                |
| })                             |                |
+--------------------------------+----------------+

:) 

+--------------------------------+----------------+
|             INPUT              |     OUTPUT     |
+--------------------------------+----------------+
| expect(2 + 2).toEqual(4)        | "Pass" |
|                                |                |
|                :)              |                |
+--------------------------------+----------------+
|     expect(2 + 2).toEqual(3)   | "Fail"        |
|                                |                |
|                                 |                |
+--------------------------------+----------------+

expect = function(testcase) {
}

toEqual = function(comparison) {
    
}

=> VM523:1 Uncaught TypeError: Cannot read property 'toEqual' of undefined

-------------------

expect(2 + 2).toEqual(4)

it('2+1 equals 3', function(){
    })


var expect = function(testcaste) {
    var toEqual = function(comparison) {
    }
}

var expect = function(testcase) {
    var toEqual = function(comparison) {
      return true
    }
    return {toEqual: toEqual}
}

it('2+1 equals 3', function(){
expect(2 + 1).toEqual(3) }) 
