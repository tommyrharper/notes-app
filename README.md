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
As a user
So that I can run a test,
I should be able to open test.html in browser
````