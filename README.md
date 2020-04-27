# Notes App

We are not alowed to use libraries for this project, so we will have to build our own testing system

# Testing Framework

- It can "run tests"

    INPUT                 |    OUTPUT

 open test.html in browser |   Pass/Fail in browser console / on the page.

- It can assess if something is equal to a given value

|INPUT      |    OUTPUT |
------------|---------
assessEqual(4,4) |  true

- It tells the user if a test passes or fails


## Three more features:
- It shows a label for each test
- It may have mocking/stubbing
- It tells you where in the code the test is failing (print error message)
Backlog:
- Documentation
- It lets you choose which test to run, and run all tests if needed
- It can assess if something throws an error
- It can assess if something "is responding" (something exists within your program)

## 1st User Story

```
As a programmer,
So that I can run a test,
I should be able to open test.html in browser and see a pass or fail message
````

## 2nd User Story

```
As a programmer,
So that I know if a function gives the desired output,
I want to be able to asses whether something is equal to a given value.
```


Input | Output
------|------
assessEqual(4,4) | true x
assessEquall(5,4) | false x
assessEqual(1,2) | false x
assessEqual('a','a') | true x
assessEqual('2', 2) | false x
assessEqual(array[0], 1) | true x
assessEqual(2+2,1+3) | true x

## 3rd User Story

```
As a programmer,
So that I know if my passes,
I want to be able to see if my test passed or failed.
```
