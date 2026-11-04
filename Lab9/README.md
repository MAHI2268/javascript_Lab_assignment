# Assignment 9: Dom, Validation, Storage And Quiz

## Experiment Title
DOM, Validation, Storage and Quiz

## Aim
Change page content after a click, validate form data, store text locally, and create a small quiz.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
The Document Object Model (DOM) represents an HTML page as objects that JavaScript can access and change. Event listeners run code in response to user actions such as clicks. Validation checks whether supplied data meets requirements. localStorage stores string data in the browser across page reloads. A quiz can read a selected radio option and display feedback.

## Question 1: Change a heading when a button is clicked.

### Algorithm / Procedure
Create a page with a Welcome heading and a Change text button. Add a click listener that changes the heading.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Before click: Welcome
After click: Button clicked
```

### Result
The task was completed successfully. The program produced the expected output: Before click: Welcome
After click: Button clicked.

## Question 2: Validate a name and return a list of errors.

### Algorithm / Procedure
Create validateForm(name). It returns an empty array for Asha and the required error for an empty name.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
[]
[ 'Name is required' ]
```

### Result
The task was completed successfully. The program produced the expected output: []
[ 'Name is required' ].

## Question 3: Save text in localStorage and restore it when the page opens.

### Algorithm / Procedure
Create a text box and Save button. On page load, restore the saved note. On click, save the current text under key note.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
The saved text reappears in the input after the page is reopened.
```

### Result
The task was completed successfully. The program produced the expected output: The saved text reappears in the input after the page is reopened..

## Question 4: Create a multiple-choice quiz with feedback.

### Algorithm / Procedure
Display the question and three radio choices. Show Correct only when option 5 is selected; otherwise show Try again.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Selecting 5: Correct
Selecting 4 or 6: Try again
```

### Result
The task was completed successfully. The program produced the expected output: Selecting 5: Correct
Selecting 4 or 6: Try again.

## Viva-Voce Questions
- What is the DOM?
- What is an event listener?
- What is localStorage?
- Why is input validation important?
