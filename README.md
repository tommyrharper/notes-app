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

- It tells the user is a test passes or fails


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