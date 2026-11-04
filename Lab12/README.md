# Assignment 12: Callbacks And Higher-Order Functions

## Experiment Title
Callbacks and Higher-Order Functions

## Aim
Pass functions as arguments and invoke them from another function.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
A callback is a function passed to another function as an argument. A higher-order function accepts a function as an argument or returns a function. This approach allows reusable behaviour to be supplied when a function is called.

## Question 1: Apply a function twice to a value.

### Algorithm / Procedure
Create applyTwice and addTen. The callback must run first on 5 and then on the returned result.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
25
```

### Result
The task was completed successfully. The program produced the expected output: 25.

## Question 2: Format marks using a callback.

### Algorithm / Procedure
Create formatMarks(marks, callback) and call it with 76 and an arrow function returning the requested label.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Marks: 76/100
```

### Result
The task was completed successfully. The program produced the expected output: Marks: 76/100.

## Question 3: Repeat an action three times using a callback.

### Algorithm / Procedure
Create repeatAction(times, action) and pass the round number to the callback for rounds 1 through 3.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Round 1
Round 2
Round 3
```

### Result
The task was completed successfully. The program produced the expected output: Round 1
Round 2
Round 3.

## Viva-Voce Questions
- What is a callback function?
- What is a higher-order function?
- How is a function passed as an argument?
- What is the benefit of callback-based design?
