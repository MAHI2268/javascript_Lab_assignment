console.log("---Task 3---");
let marks = [72, 85, 45, 90];

let filteredMarks = marks.filter(function(mark) {
    return mark >= 60;
});

console.log("Filtered marks:", filteredMarks);