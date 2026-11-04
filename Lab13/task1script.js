console.log("---Task 1---");
let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => sum + price, 0);

console.log("Total:", total);