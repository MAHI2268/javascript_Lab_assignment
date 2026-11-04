console.log("---Task 3---");
let text = '{name: Rohan}';

try {
    let obj = JSON.parse(text);
    console.log(obj);
}
catch (error) {
    console.log("Invalid JSON");
}