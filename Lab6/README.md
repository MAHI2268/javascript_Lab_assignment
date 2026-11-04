# Assignment 6: Json Text

## Experiment Title
JSON Text

## Aim
Convert an object to JSON text, parse JSON text into an object, and handle invalid JSON.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
JSON (JavaScript Object Notation) is a text format for representing structured data. JSON.stringify() converts a JavaScript value into JSON text. JSON.parse() converts valid JSON text into a JavaScript value. Invalid JSON causes a parsing error, which can be handled with try and catch.

## Question 1: Convert a student object into JSON text.

### Algorithm / Procedure
Create an object with name Rohan and marks [70, 80], stringify it and print the result.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
{"name":"Rohan","marks":[70,80]}
```

### Result
The task was completed successfully. The program produced the expected output: {"name":"Rohan","marks":[70,80]}.

## Question 2: Parse JSON text and print the city.

### Algorithm / Procedure
Store the supplied JSON text, parse it, and access its city property.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Pune
```

### Result
The task was completed successfully. The program produced the expected output: Pune.

## Question 3: Catch invalid JSON using try and catch.

### Algorithm / Procedure
Store the invalid JSON text exactly as supplied and print the required message in catch.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Invalid JSON
```

### Result
The task was completed successfully. The program produced the expected output: Invalid JSON.

## Viva-Voce Questions
- What is JSON?
- What does JSON.stringify() do?
- What does JSON.parse() do?
- Why are try and catch used?
