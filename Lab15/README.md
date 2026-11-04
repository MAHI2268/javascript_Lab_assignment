# Assignment 15: Promises And Async/Await With Local Data

## Experiment Title
Promises and async/await with Local Data

## Aim
Create resolving and rejecting Promises, handle them with async/await, and load local data asynchronously.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
A Promise represents the eventual success or failure of an asynchronous operation. It can be fulfilled with resolve() or rejected with reject(). async functions always return a Promise. The await keyword pauses execution inside an async function until a Promise settles. try and catch handle rejected Promises and other thrown errors.

## Question 1: Resolve a Promise for marks within the valid range.

### Algorithm / Procedure
Create checkMarks(marks), resolving for values from 0 to 100 and rejecting otherwise. Call it with 80 and print the resolved value.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
80
```

### Result
The task was completed successfully. The program produced the expected output: 80.

## Question 2: Handle a rejected Promise for marks 120.

### Algorithm / Procedure
Use the same validation rule, call checkMarks(120), and print the rejection message.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Marks out of range
```

### Result
The task was completed successfully. The program produced the expected output: Marks out of range.

## Question 3: Use async/await with try and catch for valid and invalid marks.

### Algorithm / Procedure
Inside run(), print the result of checkMarks(65), then await checkMarks(-5). Catch and print the required error message.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
65
Caught: Marks out of range
```

### Result
The task was completed successfully. The program produced the expected output: 65
Caught: Marks out of range.

## Question 4: Load and print local user data through a Promise.

### Algorithm / Procedure
getUsers resolves after 100 milliseconds with three local user objects. Await the Promise and print each user's name.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Asha
Rohan
Meera
```

### Result
The task was completed successfully. The program produced the expected output: Asha
Rohan
Meera.

## Viva-Voce Questions
- What is a Promise?
- What are resolve() and reject()?
- What does async do?
- How do await and try...catch work together?
