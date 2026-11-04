# Assignment 8: Inheritance, Methods And Composition

## Experiment Title
Inheritance, Methods and Composition

## Aim
Use class inheritance, write a value-checking method, and compose one object inside another.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
Inheritance allows a class to reuse and extend the features of another class. The extends keyword creates a child class, and super() calls the parent constructor when needed. A method can compare a supplied value with stored data and return a boolean. Composition builds a larger object by storing another object as one of its properties.

## Question 1: Create Person and Teacher classes using inheritance.

### Algorithm / Procedure
Person.greet() returns a greeting using the name. Teacher extends Person and stores a subject. Create Anita, who teaches Maths, and print the greeting.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Hi, I am Anita
```

### Result
The task was completed successfully. The program produced the expected output: Hi, I am Anita.

## Question 2: Create a Locker class with a PIN-checking method.

### Algorithm / Procedure
Store PIN 1234 and print the result of checking 1111 and 1234.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
false
true
```

### Result
The task was completed successfully. The program produced the expected output: false
true.

## Question 3: Use composition to create a Car containing an Engine.

### Algorithm / Procedure
Engine stores power. Car creates an Engine using the supplied power and returns the required start message.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Car starts with 150 HP
```

### Result
The task was completed successfully. The program produced the expected output: Car starts with 150 HP.

## Viva-Voce Questions
- What is inheritance?
- What is the purpose of extends?
- What does super() do?
- What is composition in object-oriented programming?
