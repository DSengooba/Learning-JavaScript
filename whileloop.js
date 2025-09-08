// JavaScript While Loop
// Loops can execute a block of code as long as a specified condition is true.
// The while loop loops through a block of code as long as a specified condition is true.
// Example 

let theNumb = "";
let i = 0;
while (i < 10) {
  theNumb += "The number is " + i + "\n";
  i++;
}
console.log(theNumb);

// In this example, Let's say we want to calculate the sum of numbers from 1 to 5
let sum = 0;
let x = 1;
while (x <= 5) {
  sum += x;
  x++;
}
console.log("The sum is: " + sum);

// Using a string "Daniel" to print my name 3 times 
let printName = "";
let d = 0;
let myName = "Daniel";
while (d < 3) {
  printName += myName + " ";
  d++;
}
console.log(printName);

// The Do While Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, 
// before checking if the condition is true, then it will repeat the loop as long as the condition is true.
let k = 0;
do {
  console.log("The number is: " + k);
  k++;
} while (k < 5);

// The key difference between do...while and while is that do...while guarantees the code inside the loop will run at least once, 
// even if the condition is false.
let s = 10;
do {
  console.log("The number is: " + s);
  s++;
} while (s < 5);

// Comparing For and While
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let v = 0;
let text = "";
for (;cars[v];) {
  text += cars[v] + "<br>";
  v++;
}
console.log(text)

// in the same example using the while loop
const cars2 = ["BMW", "Volvo", "Saab", "Ford"];
let j = 0;
let text2 = "";
while (cars2[j]) {
  text2 += cars2[j] + "<br>";
  j++;
}
console.log(text2)