# Assignment 11: Scope And Closures

## Experiment Title
Scope and Closures

## Aim
Understand block and global scope, and use a closure to preserve a value between function calls.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
Scope determines where a variable can be accessed. A let variable declared inside a block is limited to that block, while a variable declared outside functions and blocks can be accessed by functions in its scope. A closure occurs when an inner function retains access to variables from its outer function even after the outer function has finished executing.

## Question 1: Demonstrate block scope.

### Algorithm / Procedure
Declare level as outer, declare another level as inner inside a block, and print both values in their respective scopes.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
inner
outer
```

### Result
The task was completed successfully. The program produced the expected output: inner
outer.

## Question 2: Create a counter using a closure.

### Algorithm / Procedure
makeCounter initializes count to zero and returns an inner function that increments and returns count. Call it twice.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
1
2
```

### Result
The task was completed successfully. The program produced the expected output: 1
2.

## Question 3: Access a global variable from a function.

### Algorithm / Procedure
Declare school outside the function, then print the welcome message from showSchool().

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Welcome to Sample College
```

### Result
The task was completed successfully. The program produced the expected output: Welcome to Sample College.

## Viva-Voce Questions
- What is scope?
- What is block scope?
- What is a closure?
- What is a global variable?
