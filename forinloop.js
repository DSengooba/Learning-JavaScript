// the for in loop
// create an object
let person = {
    name: 'Daniel', age: 38, occupation: 'Sys Admin', tribe: 'muganda', status: 'married' 
}
for (let k in person){
console.log(k)
}

// using the for in loop with arrays
let MyNumbers = [4, 10, 20, 50, 90];
for (let h in MyNumbers){
console.log(h)
}

// Assignment: console.log an array, printing out 1 item at a time and clearly stating that...at postion y we have ....

let MyArry = [4, 10, 20, 50, 90];
for (let y in MyArry) {
  console.log("At position " + y + " we have " + MyArry[y]);
}

