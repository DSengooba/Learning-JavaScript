// JavaScript Break and Continue
// The break statement "jumps out" of a loop.
// The continue statement "jumps over" one iteration in the loop.
// Example 1 - In this example, the loop will exit when i reaches 3.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log('prints', i);
}

// example 2 using a switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Some other day");
}

// The Continue Statement
// The continue statement breaks one iteration (in the loop), if a specified condition occurs, 
// and continues with the next iteration in the loop.
// The continue statement is used to skip the current iteration of a loop and move on to the next one.
for (let x = 0; x < 5; x++) {
  if (x === 3) {
    continue;
  }
  console.log('print', x);
}

// javascript labels 
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
console.log(text);