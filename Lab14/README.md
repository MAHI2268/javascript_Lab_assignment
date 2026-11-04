# Assignment 14: Timers And Intervals

## Experiment Title
Timers and Intervals

## Aim
Run code after a delay, cancel a scheduled timer, and repeat code using setInterval.

## Software / Tools Required
Visual Studio Code or any text editor, a modern web browser (for browser-based tasks), and Node.js (for .js programs).

## Theory
setTimeout() schedules a function to run once after a specified delay. It returns a timer identifier that can be passed to clearTimeout() to cancel the scheduled callback. setInterval() repeatedly runs a callback after each interval until clearInterval() stops it. Timer callbacks run asynchronously through the JavaScript event loop.

## Question 1: Observe the order of synchronous code and a zero-delay timer.

### Algorithm / Procedure
Print Start, schedule Timer done with setTimeout at delay zero, then print End.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Start
End
Timer done
```

### Result
The task was completed successfully. The program produced the expected output: Start
End
Timer done.

## Question 2: Cancel a timeout before it runs.

### Algorithm / Procedure
Schedule Not shown after 1000 milliseconds, store its identifier, cancel it, and print Cancelled.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Cancelled
```

### Result
The task was completed successfully. The program produced the expected output: Cancelled.

## Question 3: Print three ticks using setInterval.

### Algorithm / Procedure
Increment a counter every 200 milliseconds, print each tick and clear the interval when the count reaches 3.

### Input
Values and test data are declared in the program as specified in the task.

### Output
```text
Tick 1
Tick 2
Tick 3
```

### Result
The task was completed successfully. The program produced the expected output: Tick 1
Tick 2
Tick 3.

## Viva-Voce Questions
- What does setTimeout() do?
- How can a timeout be cancelled?
- What is the purpose of setInterval()?
- Why is timer output asynchronous?
